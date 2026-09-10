import { Renderer, Program, Mesh, Color, Triangle } from "https://esm.sh/ogl@1.0.11";

const VERT = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop { vec3 color; float position; };

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  vec3 auroraColor = intensity * rampColor;
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

class AuroraBg extends HTMLElement {
  static get observedAttributes() { return ["colors", "speed", "blend", "amplitude"]; }

  connectedCallback() {
    if (this._started) return;
    this._started = true;
    this.style.display = "block";
    this.style.width = "100%";
    this.style.height = "100%";

    const renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.cssText = "display:block;width:100%;height:100%;background:transparent";

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) delete geometry.attributes.uv;

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: this.amp() },
        uColorStops: { value: this.stops() },
        uResolution: { value: [this.offsetWidth || 1, this.offsetHeight || 1] },
        uBlend: { value: this.blend() }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    this.appendChild(gl.canvas);

    this._resize = () => {
      const w = this.offsetWidth || 1;
      const h = this.offsetHeight || 1;
      renderer.setSize(w, h);
      program.uniforms.uResolution.value = [w, h];
    };
    window.addEventListener("resize", this._resize);
    this._ro = new ResizeObserver(this._resize);
    this._ro.observe(this);
    this._resize();

    const update = (t) => {
      this._raf = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001 * this.speed();
      program.uniforms.uAmplitude.value = this.amp();
      program.uniforms.uBlend.value = this.blend();
      program.uniforms.uColorStops.value = this.stops();
      renderer.render({ scene: mesh });
    };
    this._raf = requestAnimationFrame(update);
    this._gl = gl;
  }

  disconnectedCallback() {
    cancelAnimationFrame(this._raf);
    window.removeEventListener("resize", this._resize);
    if (this._ro) this._ro.disconnect();
    if (this._gl) this._gl.getExtension("WEBGL_lose_context")?.loseContext();
    this._started = false;
  }

  stops() {
    const raw = (this.getAttribute("colors") || "#5227FF,#7cff67,#5227FF").split(",");
    return raw.map((hex) => { const c = new Color(hex.trim()); return [c.r, c.g, c.b]; });
  }
  speed() { return parseFloat(this.getAttribute("speed") || "0.5"); }
  blend() { return parseFloat(this.getAttribute("blend") || "0.5"); }
  amp() { return parseFloat(this.getAttribute("amplitude") || "1"); }
}

if (!customElements.get("aurora-bg")) customElements.define("aurora-bg", AuroraBg);
