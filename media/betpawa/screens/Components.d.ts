// Components.d.ts — the complete catalog of the 63 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Activity2) and usable directly in JSX.
import * as React from 'react';

// figma layer: "activity" (node 1:253)
export interface Activity2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "arrow-up-down" (node 1:1431)
export interface ArrowUpDownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Backdrop" (node 1:12991)
export interface BackdropProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Badge" (node 1:488)
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  badgeText?: string;
  showLeftIcon?: boolean;
  leftIcon?: React.ReactNode;
  showLabel?: boolean;
  variant?: "default" | "secondary" | "outline" | "destructive" | "inverse" | "inverse secondary" | "alternative" | "warning" | "success";
  rightIcon?: React.ReactNode;
  size?: "default" | "sm" | "lg";
  showRightIcon?: boolean;
}

// figma layer: "Badge Casino" (node 1:12925)
export interface BadgeCasinoProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "hot" | "new" | "low data" | "exclusive" | "spinner" | "3x3 slot";
}

// figma layer: "Badge Number" (node 1:174)
export interface BadgeNumberProps {
  className?: string;
  style?: React.CSSProperties;
  badgeText?: string;
  variant?: "secondary" | "default" | "inverse" | "inverse secondary" | "outline" | "destructive" | "alternative";
  size?: "sm" | "default" | "lg";
}

// figma layer: "Bet Button" (node 1:12291)
export interface BetButtonProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "active" | "locked";
  layout?: "horizontal" | "vertical" | "single";
  icon?: boolean;
  oddsDown?: boolean;
  oddsUp?: boolean;
  /** Text content; defaults to "1". */
  text1?: string;
  /** Text content; defaults to "4.35". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Bet Button More" (node 1:12558)
export interface BetButtonMoreProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Bet Markets" (node 1:29509)
export interface BetMarketsProps {
  className?: string;
  style?: React.CSSProperties;
  betlineMenu?: "active" | "collapsed" | "header";
  showNoCashoutBadge?: boolean;
  showBoosted?: boolean;
  size?: "default" | "compact";
  showPin?: boolean;
  show2upBadge?: boolean;
  /** Text content; defaults to "1X2 | Full Time 2UP". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "bj-Benin" (node 1:11074)
export interface BjBeninProps {
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: "1x1" | "3x2" | "4x3";
  borderRadius?: "circle" | "sharp" | "rounded";
}

// figma layer: "Bottom Navigation" (node 1:5069)
export interface BottomNavigationProps {
  className?: string;
  style?: React.CSSProperties;
  loggedIn?: boolean;
  product?: "sports" | "virtuals" | "cut +";
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Bottom Sheet/BigWin/Primary" (node 1:13145)
export interface BottomSheetBigWinPrimaryProps {
  className?: string;
  style?: React.CSSProperties;
  showHeader?: boolean;
  header?: React.ReactNode;
  buttons?: React.ReactNode;
  body?: string;
  showButtons?: boolean;
  /** Text content; defaults to "Winning is your game!". */
  text1?: string;
  /** Text content; defaults to "You’ve just secured a BIG WIN of". */
  text2?: string;
  /** Text content; defaults to "UGX 2647.60". */
  text3?: string;
  /** Text content; defaults to "with 5.67 Odds". */
  text4?: string;
}

// figma layer: "Bottom Sheet Header" (node 1:6278)
export interface BottomSheetHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  showTitle?: boolean;
  property1?: "default" | "tab";
  showActionRight?: boolean;
  back?: boolean;
  leftIcon?: boolean;
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Button" (node 1:735)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  buttonText?: string;
  showLeftIcon?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "inverse" | "tonal" | "outline 2";
  state?: "default" | "hover" | "loading" | "disabled";
  showRightIcon?: boolean;
  style2?: "square" | "round";
  size?: "default" | "sm" | "lg";
}

// figma layer: "C+" (node 1:5065)
export interface CProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Casino Games" (node 1:12939)
export interface CasinoGamesProps {
  className?: string;
  style?: React.CSSProperties;
  games?: "aero" | "cricket crash" | "footballx" | "hot & win" | "mighty masks" | "rusty curly" | "samba stars" | "temple of torment" | "wilds & gods" | "missing image" | "aviator" | "jetx" | "multihot5";
  /** Text content; defaults to "Cricket Crash". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "check" (node 1:466)
export interface CheckProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Checkbox-Primary" (node 1:12998)
export interface CheckboxPrimaryProps {
  className?: string;
  style?: React.CSSProperties;
  showText?: boolean;
  labelText?: string;
  showDescription?: boolean;
  descriptionText?: string;
  status?: "inactive" | "active";
  state?: "default" | "focus" | "disabled" | "error";
  mode?: "default" | "inverse";
  text?: "text + discription" | "text";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "chevron-down" (node 1:271)
export interface ChevronDownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "chevron-right" (node 1:469)
export interface ChevronRightProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "chevron-up" (node 1:1455)
export interface ChevronUpProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "chevrons-up" (node 1:12227)
export interface ChevronsUpProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Chip" (node 1:13233)
export interface ChipProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "active" | "disabled";
  chevronUp?: React.ReactNode;
  showBadge?: boolean;
  chevron?: boolean;
  size?: "lg" | "default" | "sm" | "xs";
  label?: boolean;
  showLeftIcon?: boolean;
  style2?: "default" | "inverse";
  leftIcon?: React.ReactNode;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "cirlce- info" (node 1:606)
export interface CirlceInfoProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "color_2Up" (node 1:2109)
export interface Color2UpProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "color_boosted" (node 1:12549)
export interface ColorBoostedProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Combo" (node 1:12418)
export interface ComboProps {
  className?: string;
  style?: React.CSSProperties;
  show2up?: boolean;
  property1?: "1" | "3" | "4" | "2";
  showLine?: boolean;
  showBadge?: boolean;
  placement?: "home" | "event";
  icon?: boolean;
  lines?: boolean;
  /** Text content; defaults to "3:00PM". */
  text1?: string;
  /** Text content; defaults to "Wed 16/12". */
  text2?: string;
}

// figma layer: "Combobet Line/2 lines/Combo" (node 1:12269)
export interface CombobetLine2LinesComboProps {
  className?: string;
  style?: React.CSSProperties;
  lines?: boolean;
  icon?: boolean;
  showLine?: boolean;
  /** Text content; defaults to "Non". */
  text1?: string;
  /** Text content; defaults to "Marque pendant les deux périodes | ". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Crypto Icon" (node 1:6540)
export interface CryptoIconProps {
  className?: string;
  style?: React.CSSProperties;
  symbol?: "usdc" | "zrx" | "zilla" | "zil" | "zest" | "zen" | "zel" | "zec" | "zcl" | "yoyow" | "yfi" | "xzc" | "xvg" | "xvc" | "xuc" | "xtz" | "xsg" | "xrp" | "xpm" | "xpa" | "xp" | "xmy" | "xmr" | "xmo" | "xmg" | "xmcc" | "xlm" | "xin" | "xem" | "xdn" | "xcp" | "xcm" | "xby" | "xbp" | "xbc" | "xas" | "x" | "wtc" | "wpr" | "wings" | "wicc" | "wgr" | "wbtc" | "wax" | "waves" | "wan" | "wabi" | "vtho" | "vtc" | "vrsc" | "vrc" | "vivo" | "vibe" | "vib" | "via" | "vet" | "veri" | "utk" | "ust" | "usdt" | "usd" | "unity" | "uni" | "uma" | "ubq" | "tzc" | "tusd" | "trx" | "trtl" | "trig" | "tpay" | "tomo" | "tnt" | "tnc" | "tnb" | "tks" | "tkn" | "tix" | "tht" | "theta" | "tgch" | "tern" | "ten" | "tel" | "tbx" | "tau" | "taas" | "sys" | "sushi" | "sumo" | "sub" | "stx" | "strat" | "stq" | "storm" | "storj" | "steem" | "start" | "stak" | "srn" | "sphtx" | "spank" | "soc" | "snx" | "snt" | "snm" | "sngls" | "smart" | "sls" | "slr" | "sky" | "sin" | "sib" | "shift" | "sek" | "sc" | "sberbank" | "sbd" | "san" | "salt" | "sai" | "safe" | "ryo" | "rvn" | "rub" | "rpx" | "rlc" | "rise" | "ric" | "rhoc" | "req" | "repv2" | "rep" | "ren" | "rdn" | "rdd" | "rcn" | "rap" | "rads" | "r" | "qtum" | "qsp" | "qrl" | "qlc" | "qiwi" | "qash" | "pura" | "pungo" | "prqboost" | "prq" | "prl" | "pre" | "ppt" | "ppp" | "ppc" | "powr" | "pot" | "poly" | "polis" | "poe" | "poa" | "plr" | "pivx" | "pirl" | "pink" | "payx" | "pay" | "pax" | "pasl" | "pasc" | "part" | "pac" | "oxt" | "ox" | "ost" | "oot" | "ont" | "ong" | "omni" | "omg" | "ocean" | "oax" | "nxt" | "nxs" | "nuls" | "npxs" | "nmr" | "nmc" | "nlg" | "nlc2" | "nio" | "ngc" | "nexo" | "neu" | "neos" | "neo" | "nebl" | "ndz" | "ncash" | "nav" | "nas" | "nano" | "mzc" | "music" | "mtl" | "mth" | "msr" | "mona" | "mod" | "moac" | "mnz" | "mnx" | "mln" | "mkr" | "mith" | "mir" | "miota" | "mft" | "meetone" | "med" | "mds" | "mda" | "mco" | "mcap" | "matic" | "mana" | "maid" | "luna" | "lun" | "ltc" | "lsk" | "lrc" | "lpt" | "loom" | "lkk" | "link" | "leo" | "lend" | "lbc" | "krb" | "knc" | "kmd" | "klown" | "kin" | "kda" | "kcs" | "jpy" | "jnt" | "itc" | "iq" | "iotx" | "iost" | "iop" | "ion" | "ins" | "ink" | "ilk" | "ignis" | "icx" | "icn" | "hush" | "huc" | "htr" | "html" | "ht" | "hsr" | "hpb" | "hot" | "hodl" | "hight" | "gzr" | "gxs" | "gvt" | "gusd" | "gup" | "gto" | "gsc" | "grs" | "grin" | "grc" | "gold" | "gnt" | "gno" | "gmr" | "glxt" | "gin" | "generic" | "gbyte" | "gbx" | "gbp" | "gas" | "game" | "fun" | "fuel" | "ftc" | "fsn" | "flux" | "flo" | "fldc" | "fjc" | "fil" | "fct" | "fair" | "exp" | "exmo" | "evx" | "eur" | "etp" | "etn" | "ethos" | "eth" | "etc" | "equa" | "eqli" | "eos" | "eop" | "eon" | "entrp" | "enj" | "eng" | "emc2" | "emc" | "ella" | "elix" | "elf" | "elec" | "ela" | "edoge" | "edo" | "edg" | "eca" | "ebst" | "dtr" | "dth" | "dta" | "drop" | "drgn" | "dot" | "doge" | "dock" | "dnt" | "dna" | "dlt" | "dgd" | "dgb" | "dew" | "dent" | "deez" | "dcr" | "dcn" | "dbc" | "data" | "dat" | "dash" | "dai" | "d" | "cvc" | "ctxc" | "ctr" | "cs" | "crw" | "crpt" | "cred" | "coqui" | "comp" | "colx" | "cob" | "cny" | "cnx" | "cnd" | "cmt" | "cmm" | "cloak" | "clam" | "cix" | "chips" | "chat" | "chain" | "cenz" | "cdt" | "cdn" | "cc" | "call" | "bze" | "burst" | "btx" | "btt" | "bts" | "btm" | "btg" | "btdx" | "btcz" | "btcp" | "btch" | "btcd" | "btc" | "bsv" | "bsd" | "brd" | "bq" | "bpt" | "bos" | "booty" | "bnty" | "bnt" | "bnb" | "blz" | "block" | "blk" | "blcn" | "bix" | "bela" | "beam" | "bdl" | "bcpt" | "bco" | "bcn" | "bcio" | "bch" | "bcd" | "bcc" | "bcbc" | "bay" | "bat" | "band" | "bal" | "bab" | "aywa" | "auto" | "audr" | "aud" | "atom" | "atm" | "ast" | "ary" | "arnx" | "arn" | "ark" | "arg" | "ardr" | "appc" | "apex" | "ant" | "ampl" | "amp" | "amb" | "algo" | "albt" | "aion" | "agrs" | "agi" | "aeon" | "ae" | "adx" | "add" | "ada" | "actn" | "act" | "abt" | "aave" | "2give" | "1inch" | "0xbtc";
}

// figma layer: "Currency Selector" (node 1:11013)
export interface CurrencySelectorProps {
  className?: string;
  style?: React.CSSProperties;
  showLeftIcon?: boolean;
  state?: "default" | "hover" | "pressed" | "disabled";
  size?: "default" | "sm" | "lg";
  /** Text content; defaults to "USDC". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Deposit Button" (node 1:5179)
export interface DepositButtonProps {
  className?: string;
  style?: React.CSSProperties;
  chevron?: boolean;
  type?: "show balance" | "header" | "hide balance" | "betslip";
  state?: "default" | "hover/pressed";
  /** Text content; defaults to "GH₵ 882.10". */
  text1?: string;
}

// figma layer: "_deposit component" (node 1:11981)
export interface DepositComponentProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "filled";
}

// figma layer: "Divider" (node 1:1574)
export interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Dropdown" (node 1:6328)
export interface DropdownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Flags" (node 1:8907)
export interface FlagsProps {
  className?: string;
  style?: React.CSSProperties;
  country?: "england" | "benin" | "andorra" | "italy" | "france" | "europe" | "united-arab-emirates" | "afghanistan" | "albania" | "armenia" | "angola" | "argentina" | "american-samoa" | "cameroon" | "congo-brazzaville" | "democratic-republic-of-the-congo" | "gabon" | "ghana" | "kenya" | "lesotho" | "mozambique" | "nigeria" | "rwanda" | "sierra-leone" | "tanzania" | "uganda" | "zambia" | "antigua-and-barbuda" | "antarctica" | "austria" | "australia" | "aland-islands" | "azerbaijan" | "bosnia-and-herzegovina" | "barbados" | "bangladesh" | "belgium" | "burkina-faso" | "bulgaria" | "bahrain" | "burundi" | "bolivia" | "brazil" | "bahamas" | "buthan" | "botwsana" | "belarus" | "canada" | "central-african-republic" | "switzerland" | "ivory-coast" | "chile" | "china" | "colombia" | "costa-rica" | "cuba" | "cyprus" | "czech-republic" | "germany" | "djibouti" | "denmark" | "dominican-republic" | "algeria" | "ecuador" | "estonia" | "egypt" | "western-sahara" | "eritrea" | "canary-islands" | "catalonia" | "galicia" | "basque-country" | "spain" | "ethiopia" | "finland" | "fiji" | "federated-states-of-micronesia" | "faroe-islands" | "scotland" | "united-kingdom" | "wales" | "georgia" | "gibraltar" | "greenland" | "gambia" | "guinea" | "equatorial-guinea" | "greece" | "guatemala" | "guinea-bissau" | "guyana" | "hong-kong" | "honduras" | "croatia" | "haiti" | "hungary" | "indonesia" | "ireland" | "israel" | "india" | "iraq" | "iran" | "iceland" | "jamaica" | "jordan" | "japan" | "kyrgyzstan" | "cambodia" | "kiribati" | "north-korea" | "south-korea" | "kuwait" | "kazakhstan" | "laos" | "lebanon" | "liechtenstein" | "sri-lanka" | "liberia" | "lithuania" | "luxemburg" | "latvia" | "libya" | "morocco" | "montenegro" | "madagascar" | "north-macedonia" | "mali" | "myanmar" | "mongolia" | "martinique" | "mauritania" | "malta" | "mauritius" | "maldives" | "mexico" | "malaysia" | "niger" | "norfolk-island" | "nicaragua" | "netherlands" | "norway" | "nepal" | "new-zealand" | "oman" | "panama" | "peru" | "papua-new-guinea" | "philippines" | "pakistan" | "poland" | "puerto-rico" | "state-of-palestine" | "portugal" | "palau" | "paraguay" | "qatar" | "romania" | "serbia" | "russia" | "saudi-arabia" | "seychelles" | "sudan" | "sweden" | "singapore" | "slovenia" | "slovakia" | "san-marino" | "senegal" | "somalia" | "suriname" | "south-sudan" | "el-salvador" | "syria" | "chad" | "togo" | "thailand" | "tajikistan" | "east-timor" | "tunisia" | "tonga" | "turkey" | "trinidad-and-tobago" | "taiwan" | "ukraine" | "united-states-of-america" | "uruguay" | "uzbekistan" | "holy-see" | "venezuela" | "vietnam" | "samoa" | "yemen" | "south-africa" | "malawi" | "world" | "northen-ireland" | "moldova" | "kosovo" | "zimbabwe" | "namibia" | "eswatini" | "cabo verde" | "comoros" | "brunei" | "belize" | "cook islands" | "dominica" | "grenada" | "saint kitts and nevis" | "saint lucia" | "monaco" | "marshall islands" | "nauru" | "french polynesia" | "solomon islands" | "sao tome and principe" | "turkmenistan" | "tuvalu" | "saint vincent and the grenadines" | "vanuatu";
}

// figma layer: "football-ball" (node 1:601)
export interface FootballBallProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Frame 1597882278" (node 1:29580)
export interface Frame1597882278Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Games thumb header" (node 1:12882)
export interface GamesThumbHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  showBadge?: boolean;
}

// figma layer: "Header" (node 1:5238)
export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  search?: boolean;
  state?: "logged in" | "logged out";
  showAccountIcon?: boolean;
  size?: "default" | "compact" | "desktop";
  showCounterBadge?: boolean;
  logo?: "default";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Icon" (node 1:22)
export interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  iconSwap?: React.ReactNode;
  size?: "20px" | "16px" | "24px";
}

// figma layer: "Icon Button" (node 1:2460)
export interface IconButtonProps {
  className?: string;
  style?: React.CSSProperties;
  icon20x20?: React.ReactNode;
  variant?: "tertiary" | "inverse" | "tonal" | "primary" | "outline" | "secondary";
  state?: "default" | "hover" | "loading" | "disabled";
  icon16x16?: React.ReactNode;
  style2?: "circle" | "square";
  icon24x24?: React.ReactNode;
  size?: "sm" | "default" | "lg";
}

// figma layer: "Icon / Circle" (node 1:13368)
export interface IconCircleProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon_color" (node 1:2112)
export interface IconColorProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24px" | "20px" | "16px";
  colorIconSwap?: React.ReactNode;
}

// figma layer: "Icon / Search" (node 1:6297)
export interface IconSearchProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Input" (node 1:11120)
export interface InputProps {
  className?: string;
  style?: React.CSSProperties;
  currencyIcon?: React.ReactNode;
  errorText?: string;
  showLabel?: boolean;
  showRightBadge?: boolean;
  showLink?: boolean;
  labelText?: string;
  variant?: "default" | "amount" | "country" | "currency";
  showLeftIcon?: boolean;
  leftIcon?: React.ReactNode;
  buttonText?: string;
  linkText?: string;
  showRightIcon?: boolean;
  rightIcon?: React.ReactNode;
  rightBadge?: React.ReactNode;
  placeholderText?: string;
  state?: "default" | "focus" | "filled" | "success" | "disabled" | "error";
  descriptionText?: string;
  showErrorMessage?: boolean;
  showDescription?: boolean;
  size?: "default" | "sm" | "lg";
  /** Text content; defaults to "1000". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Live" (node 1:2087)
export interface LiveProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "icon" | "time content 1" | "time content 2" | "time content 3";
  /** Text content; defaults to "2H |71’". */
  text1?: string;
}

// figma layer: "logo" (node 1:5122)
export interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "full" | "short";
  color?: "multicolor" | "mono";
  style2?: "inverse" | "theme";
}

// figma layer: "Market Tabs" (node 1:29419)
export interface MarketTabsProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "default" | "search active";
}

// figma layer: "matchcard_default" (node 1:12563)
export interface MatchcardDefaultProps {
  className?: string;
  style?: React.CSSProperties;
  optionsCount?: "3" | "2" | "matchcard_extra_time" | "matchcard_penalties" | "total-goals";
  score?: boolean;
  type?: "live" | "pre event";
  size?: "compact" | "default";
  show2upBadge?: boolean;
  showBoostedBadge?: boolean;
  showStatisticsIcon?: boolean;
  showDivider?: boolean;
  showLeftIcon?: boolean;
  /** Text content; defaults to "10:30PM". */
  text1?: string;
  /** Text content; defaults to "Wed 28/05". */
  text2?: string;
  /** Text content; defaults to "St George Willawong FC". */
  text3?: string;
  /** Text content; defaults to "Olympic FC Brisbane". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "my-bets" (node 1:20)
export interface MyBets2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "nav-button" (node 1:4977)
export interface NavButtonProps {
  className?: string;
  style?: React.CSSProperties;
  active?: boolean;
  size?: "m" | "s";
  bagde?: boolean;
  /** Text content; defaults to "Sports". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "OSM Notification" (node 1:13164)
export interface OSMNotificationProps {
  className?: string;
  style?: React.CSSProperties;
  close?: boolean;
  type?: "default" | "button" | "type3";
  /** Text content; defaults to "5:34 am, Mon 01/09". */
  text1?: string;
  /** Text content; defaults to "You just got paid out early thanks to 2UP. Check My Bets for more information. ". */
  text2?: string;
  /** Text content; defaults to "EXPIRED". */
  text3?: string;
}

// figma layer: "_progress-bar-text" (node 1:5017)
export interface ProgressBarTextProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "win-boost" | "cut+" | "progress bar" | "matchday";
  /** Text content; defaults to "Add 3 legs to your betslip to earn up to a". */
  text1?: string;
  /** Text content; defaults to "1000% Win Bonus.". */
  text2?: string;
  /** Text content; defaults to "•". */
  text3?: string;
  /** Text content; defaults to "Win Bonus:". */
  text4?: string;
}

// figma layer: "Scoreboard" (node 1:29048)
export interface ScoreboardProps {
  className?: string;
  style?: React.CSSProperties;
  score?: boolean;
  matchCard?: "Regular time" | "Scheduled" | "Extra time" | "Penalties" | "regular time" | "Live";
  live?: boolean;
  sportType?: "football" | "basketball" | "tennis";
  size?: "default" | "compact";
  /** Text content; defaults to "Back". */
  text1?: string;
  /** Text content; defaults to "St George Willawong FC". */
  text2?: string;
  /** Text content; defaults to "0". */
  text3?: string;
  /** Text content; defaults to "Olympic FC Brisbane". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "320" (node 1:29671)
export interface ScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "321" (node 1:29739)
export interface Screen2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "322" (node 1:29749)
export interface Screen3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Section Header" (node 1:610)
export interface SectionHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  info?: boolean;
  showLeftIcon?: boolean;
  size?: "default" | "compact";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showBadge?: boolean;
  showRightIcon?: boolean;
  trailingEElement?: React.ReactNode;
  /** Text content; defaults to "Football". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Select" (node 1:6337)
export interface SelectProps {
  className?: string;
  style?: React.CSSProperties;
  showLeftIcon?: boolean;
  showLabel?: boolean;
  state?: "default" | "filled" | "focus" | "disabled" | "error" | "error (focus)" | "active";
  leftIcon?: React.ReactNode;
  showErrorMessage?: boolean;
  errorMessage?: string;
  descriptionText?: string;
  showDescription?: boolean;
  size?: "default" | "sm" | "lg";
  placeholderText?: string;
  labelText?: string;
}

// figma layer: "Shortcut Button" (node 1:12022)
export interface ShortcutButtonProps {
  className?: string;
  style?: React.CSSProperties;
  leftIcon?: boolean;
  state?: "default" | "hover";
  trailingElement?: boolean;
  type?: "flag" | "icon";
  flag?: React.ReactNode;
  icon?: React.ReactNode;
  /** Text content; defaults to "Live now". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Sport tabs" (node 1:13194)
export interface SportTabsProps {
  className?: string;
  style?: React.CSSProperties;
  expand?: boolean;
  activTab?: "upcoming" | "popular" | "live" | "boosted";
}

// figma layer: "_Tab" (node 1:6180)
export interface TabProps {
  className?: string;
  style?: React.CSSProperties;
  iconStart?: boolean;
  active?: boolean;
  label?: boolean;
  iconEnd?: boolean;
  badge?: boolean;
  /** Text content; defaults to "Active Tab". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "x" (node 1:455)
export interface XProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const Activity2: React.FC<Activity2Props>;
declare const ArrowUpDown: React.FC<ArrowUpDownProps>;
declare const Backdrop: React.FC<BackdropProps>;
declare const Badge: React.FC<BadgeProps>;
declare const BadgeCasino: React.FC<BadgeCasinoProps>;
declare const BadgeNumber: React.FC<BadgeNumberProps>;
declare const BetButton: React.FC<BetButtonProps>;
declare const BetButtonMore: React.FC<BetButtonMoreProps>;
declare const BetMarkets: React.FC<BetMarketsProps>;
declare const BjBenin: React.FC<BjBeninProps>;
declare const BottomNavigation: React.FC<BottomNavigationProps>;
declare const BottomSheetBigWinPrimary: React.FC<BottomSheetBigWinPrimaryProps>;
declare const BottomSheetHeader: React.FC<BottomSheetHeaderProps>;
declare const Button: React.FC<ButtonProps>;
declare const C: React.FC<CProps>;
declare const CasinoGames: React.FC<CasinoGamesProps>;
declare const Check: React.FC<CheckProps>;
declare const CheckboxPrimary: React.FC<CheckboxPrimaryProps>;
declare const ChevronDown: React.FC<ChevronDownProps>;
declare const ChevronRight: React.FC<ChevronRightProps>;
declare const ChevronUp: React.FC<ChevronUpProps>;
declare const ChevronsUp: React.FC<ChevronsUpProps>;
declare const Chip: React.FC<ChipProps>;
declare const CirlceInfo: React.FC<CirlceInfoProps>;
declare const Color2Up: React.FC<Color2UpProps>;
declare const ColorBoosted: React.FC<ColorBoostedProps>;
declare const Combo: React.FC<ComboProps>;
declare const CombobetLine2LinesCombo: React.FC<CombobetLine2LinesComboProps>;
declare const CryptoIcon: React.FC<CryptoIconProps>;
declare const CurrencySelector: React.FC<CurrencySelectorProps>;
declare const DepositButton: React.FC<DepositButtonProps>;
declare const DepositComponent: React.FC<DepositComponentProps>;
declare const Divider: React.FC<DividerProps>;
declare const Dropdown: React.FC<DropdownProps>;
declare const Flags: React.FC<FlagsProps>;
declare const FootballBall: React.FC<FootballBallProps>;
declare const Frame1597882278: React.FC<Frame1597882278Props>;
declare const GamesThumbHeader: React.FC<GamesThumbHeaderProps>;
declare const Header: React.FC<HeaderProps>;
declare const Icon: React.FC<IconProps>;
declare const IconButton: React.FC<IconButtonProps>;
declare const IconCircle: React.FC<IconCircleProps>;
declare const IconColor: React.FC<IconColorProps>;
declare const IconSearch: React.FC<IconSearchProps>;
declare const Input: React.FC<InputProps>;
declare const Live: React.FC<LiveProps>;
declare const Logo: React.FC<LogoProps>;
declare const MarketTabs: React.FC<MarketTabsProps>;
declare const MatchcardDefault: React.FC<MatchcardDefaultProps>;
declare const MyBets2: React.FC<MyBets2Props>;
declare const NavButton: React.FC<NavButtonProps>;
declare const OSMNotification: React.FC<OSMNotificationProps>;
declare const ProgressBarText: React.FC<ProgressBarTextProps>;
declare const Scoreboard: React.FC<ScoreboardProps>;
declare const Screen: React.FC<ScreenProps>;
declare const Screen2: React.FC<Screen2Props>;
declare const Screen3: React.FC<Screen3Props>;
declare const SectionHeader: React.FC<SectionHeaderProps>;
declare const Select: React.FC<SelectProps>;
declare const ShortcutButton: React.FC<ShortcutButtonProps>;
declare const SportTabs: React.FC<SportTabsProps>;
declare const Tab: React.FC<TabProps>;
declare const X: React.FC<XProps>;
declare global {
  interface Window {
    Activity2: React.FC<Activity2Props>;
    ArrowUpDown: React.FC<ArrowUpDownProps>;
    Backdrop: React.FC<BackdropProps>;
    Badge: React.FC<BadgeProps>;
    BadgeCasino: React.FC<BadgeCasinoProps>;
    BadgeNumber: React.FC<BadgeNumberProps>;
    BetButton: React.FC<BetButtonProps>;
    BetButtonMore: React.FC<BetButtonMoreProps>;
    BetMarkets: React.FC<BetMarketsProps>;
    BjBenin: React.FC<BjBeninProps>;
    BottomNavigation: React.FC<BottomNavigationProps>;
    BottomSheetBigWinPrimary: React.FC<BottomSheetBigWinPrimaryProps>;
    BottomSheetHeader: React.FC<BottomSheetHeaderProps>;
    Button: React.FC<ButtonProps>;
    C: React.FC<CProps>;
    CasinoGames: React.FC<CasinoGamesProps>;
    Check: React.FC<CheckProps>;
    CheckboxPrimary: React.FC<CheckboxPrimaryProps>;
    ChevronDown: React.FC<ChevronDownProps>;
    ChevronRight: React.FC<ChevronRightProps>;
    ChevronUp: React.FC<ChevronUpProps>;
    ChevronsUp: React.FC<ChevronsUpProps>;
    Chip: React.FC<ChipProps>;
    CirlceInfo: React.FC<CirlceInfoProps>;
    Color2Up: React.FC<Color2UpProps>;
    ColorBoosted: React.FC<ColorBoostedProps>;
    Combo: React.FC<ComboProps>;
    CombobetLine2LinesCombo: React.FC<CombobetLine2LinesComboProps>;
    CryptoIcon: React.FC<CryptoIconProps>;
    CurrencySelector: React.FC<CurrencySelectorProps>;
    DepositButton: React.FC<DepositButtonProps>;
    DepositComponent: React.FC<DepositComponentProps>;
    Divider: React.FC<DividerProps>;
    Dropdown: React.FC<DropdownProps>;
    Flags: React.FC<FlagsProps>;
    FootballBall: React.FC<FootballBallProps>;
    Frame1597882278: React.FC<Frame1597882278Props>;
    GamesThumbHeader: React.FC<GamesThumbHeaderProps>;
    Header: React.FC<HeaderProps>;
    Icon: React.FC<IconProps>;
    IconButton: React.FC<IconButtonProps>;
    IconCircle: React.FC<IconCircleProps>;
    IconColor: React.FC<IconColorProps>;
    IconSearch: React.FC<IconSearchProps>;
    Input: React.FC<InputProps>;
    Live: React.FC<LiveProps>;
    Logo: React.FC<LogoProps>;
    MarketTabs: React.FC<MarketTabsProps>;
    MatchcardDefault: React.FC<MatchcardDefaultProps>;
    MyBets2: React.FC<MyBets2Props>;
    NavButton: React.FC<NavButtonProps>;
    OSMNotification: React.FC<OSMNotificationProps>;
    ProgressBarText: React.FC<ProgressBarTextProps>;
    Scoreboard: React.FC<ScoreboardProps>;
    Screen: React.FC<ScreenProps>;
    Screen2: React.FC<Screen2Props>;
    Screen3: React.FC<Screen3Props>;
    SectionHeader: React.FC<SectionHeaderProps>;
    Select: React.FC<SelectProps>;
    ShortcutButton: React.FC<ShortcutButtonProps>;
    SportTabs: React.FC<SportTabsProps>;
    Tab: React.FC<TabProps>;
    X: React.FC<XProps>;
  }
}
