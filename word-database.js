// Curated database of ~500 common words with synonyms and antonyms
// This will work offline - larger words will use API when online
const wordDatabase = {
  "happy": {
    "synonyms": ["joyful", "cheerful", "content", "pleased", "delighted", "glad", "merry", "jubilant"],
    "antonyms": ["sad", "unhappy", "miserable", "depressed", "gloomy", "sorrowful"]
  },
  "sad": {
    "synonyms": ["unhappy", "sorrowful", "depressed", "melancholy", "gloomy", "dejected", "miserable"],
    "antonyms": ["happy", "joyful", "cheerful", "glad", "content"]
  },
  "big": {
    "synonyms": ["large", "huge", "enormous", "massive", "giant", "immense", "vast", "substantial"],
    "antonyms": ["small", "tiny", "little", "minute", "miniature"]
  },
  "small": {
    "synonyms": ["little", "tiny", "minute", "miniature", "petite", "compact", "diminutive"],
    "antonyms": ["big", "large", "huge", "enormous", "massive"]
  },
  "good": {
    "synonyms": ["excellent", "fine", "great", "wonderful", "superb", "pleasant", "satisfactory"],
    "antonyms": ["bad", "poor", "terrible", "awful", "inferior"]
  },
  "bad": {
    "synonyms": ["poor", "terrible", "awful", "inferior", "unpleasant", "dreadful", "horrible"],
    "antonyms": ["good", "excellent", "fine", "great", "wonderful"]
  },
  "fast": {
    "synonyms": ["quick", "rapid", "swift", "speedy", "hasty", "brisk", "fleet"],
    "antonyms": ["slow", "sluggish", "gradual", "leisurely"]
  },
  "slow": {
    "synonyms": ["sluggish", "gradual", "leisurely", "unhurried", "deliberate", "plodding"],
    "antonyms": ["fast", "quick", "rapid", "swift", "speedy"]
  },
  "hot": {
    "synonyms": ["warm", "heated", "burning", "scorching", "fiery", "torrid", "sweltering"],
    "antonyms": ["cold", "cool", "chilly", "frigid", "freezing"]
  },
  "cold": {
    "synonyms": ["chilly", "cool", "freezing", "frigid", "icy", "frosty", "arctic"],
    "antonyms": ["hot", "warm", "heated", "burning"]
  },
  "easy": {
    "synonyms": ["simple", "effortless", "straightforward", "uncomplicated", "elementary"],
    "antonyms": ["difficult", "hard", "complex", "complicated", "challenging"]
  },
  "difficult": {
    "synonyms": ["hard", "challenging", "tough", "complex", "complicated", "demanding"],
    "antonyms": ["easy", "simple", "effortless", "straightforward"]
  },
  "strong": {
    "synonyms": ["powerful", "mighty", "robust", "sturdy", "solid", "tough", "vigorous"],
    "antonyms": ["weak", "feeble", "frail", "delicate", "fragile"]
  },
  "weak": {
    "synonyms": ["feeble", "frail", "delicate", "fragile", "faint", "powerless"],
    "antonyms": ["strong", "powerful", "mighty", "robust", "sturdy"]
  },
  "beautiful": {
    "synonyms": ["lovely", "attractive", "gorgeous", "pretty", "stunning", "elegant", "exquisite"],
    "antonyms": ["ugly", "unattractive", "hideous", "plain"]
  },
  "ugly": {
    "synonyms": ["unattractive", "hideous", "unsightly", "grotesque", "homely"],
    "antonyms": ["beautiful", "lovely", "attractive", "gorgeous", "pretty"]
  },
  "smart": {
    "synonyms": ["intelligent", "clever", "bright", "brilliant", "wise", "sharp", "astute"],
    "antonyms": ["stupid", "dumb", "foolish", "ignorant", "unintelligent"]
  },
  "stupid": {
    "synonyms": ["dumb", "foolish", "unintelligent", "ignorant", "dense", "dim"],
    "antonyms": ["smart", "intelligent", "clever", "bright", "brilliant"]
  },
  "rich": {
    "synonyms": ["wealthy", "affluent", "prosperous", "well-off", "opulent", "moneyed"],
    "antonyms": ["poor", "impoverished", "destitute", "broke"]
  },
  "poor": {
    "synonyms": ["impoverished", "destitute", "penniless", "broke", "needy", "indigent"],
    "antonyms": ["rich", "wealthy", "affluent", "prosperous"]
  },
  "new": {
    "synonyms": ["fresh", "novel", "recent", "modern", "contemporary", "current", "latest"],
    "antonyms": ["old", "ancient", "antique", "outdated", "obsolete"]
  },
  "old": {
    "synonyms": ["ancient", "aged", "elderly", "antique", "vintage", "archaic"],
    "antonyms": ["new", "fresh", "novel", "recent", "modern"]
  },
  "clean": {
    "synonyms": ["spotless", "pristine", "immaculate", "sanitary", "hygienic", "pure"],
    "antonyms": ["dirty", "filthy", "soiled", "grimy", "unclean"]
  },
  "dirty": {
    "synonyms": ["filthy", "soiled", "grimy", "unclean", "muddy", "stained"],
    "antonyms": ["clean", "spotless", "pristine", "immaculate"]
  },
  "bright": {
    "synonyms": ["brilliant", "luminous", "radiant", "shining", "gleaming", "vivid"],
    "antonyms": ["dim", "dark", "dull", "murky", "gloomy"]
  },
  "dark": {
    "synonyms": ["dim", "gloomy", "murky", "shadowy", "black", "obscure"],
    "antonyms": ["bright", "brilliant", "luminous", "radiant"]
  },
  "love": {
    "synonyms": ["adore", "cherish", "treasure", "devotion", "affection", "fondness"],
    "antonyms": ["hate", "loathe", "detest", "despise", "dislike"]
  },
  "hate": {
    "synonyms": ["loathe", "detest", "despise", "abhor", "dislike", "resent"],
    "antonyms": ["love", "adore", "cherish", "like", "appreciate"]
  },
  "start": {
    "synonyms": ["begin", "commence", "initiate", "launch", "open", "embark"],
    "antonyms": ["end", "finish", "stop", "conclude", "terminate"]
  },
  "end": {
    "synonyms": ["finish", "conclude", "terminate", "close", "complete", "stop"],
    "antonyms": ["start", "begin", "commence", "initiate"]
  },
  "brave": {
    "synonyms": ["courageous", "fearless", "bold", "valiant", "heroic", "daring"],
    "antonyms": ["cowardly", "afraid", "fearful", "timid"]
  },
  "afraid": {
    "synonyms": ["scared", "frightened", "fearful", "terrified", "anxious", "worried"],
    "antonyms": ["brave", "courageous", "fearless", "bold"]
  },
  "loud": {
    "synonyms": ["noisy", "deafening", "thunderous", "booming", "resounding"],
    "antonyms": ["quiet", "soft", "silent", "hushed", "muted"]
  },
  "quiet": {
    "synonyms": ["silent", "hushed", "soft", "peaceful", "tranquil", "still"],
    "antonyms": ["loud", "noisy", "deafening", "booming"]
  },
  "funny": {
    "synonyms": ["humorous", "amusing", "comical", "hilarious", "entertaining", "witty"],
    "antonyms": ["serious", "boring", "dull", "unfunny"]
  },
  "serious": {
    "synonyms": ["solemn", "grave", "earnest", "sober", "stern", "severe"],
    "antonyms": ["funny", "humorous", "lighthearted", "playful"]
  },
  "empty": {
    "synonyms": ["vacant", "hollow", "blank", "bare", "void", "unoccupied"],
    "antonyms": ["full", "occupied", "filled", "packed"]
  },
  "full": {
    "synonyms": ["filled", "packed", "loaded", "brimming", "stuffed", "complete"],
    "antonyms": ["empty", "vacant", "hollow", "bare"]
  },
  "hard": {
    "synonyms": ["solid", "firm", "rigid", "stiff", "tough", "difficult"],
    "antonyms": ["soft", "easy", "simple", "flexible"]
  },
  "soft": {
    "synonyms": ["gentle", "tender", "smooth", "supple", "pliable", "flexible"],
    "antonyms": ["hard", "solid", "firm", "rigid", "tough"]
  },
  "young": {
    "synonyms": ["youthful", "juvenile", "adolescent", "immature", "fresh"],
    "antonyms": ["old", "elderly", "aged", "mature", "ancient"]
  },
  "wet": {
    "synonyms": ["damp", "moist", "soaked", "drenched", "saturated", "soggy"],
    "antonyms": ["dry", "arid", "parched", "dehydrated"]
  },
  "dry": {
    "synonyms": ["arid", "parched", "dehydrated", "thirsty", "desiccated"],
    "antonyms": ["wet", "damp", "moist", "soaked", "saturated"]
  },
  "thick": {
    "synonyms": ["dense", "heavy", "solid", "substantial", "chunky"],
    "antonyms": ["thin", "slim", "slender", "lean"]
  },
  "thin": {
    "synonyms": ["slim", "slender", "lean", "skinny", "narrow", "gaunt"],
    "antonyms": ["thick", "dense", "heavy", "fat"]
  },
  "wide": {
    "synonyms": ["broad", "expansive", "extensive", "vast", "spacious"],
    "antonyms": ["narrow", "tight", "confined", "restricted"]
  },
  "narrow": {
    "synonyms": ["tight", "confined", "restricted", "slim", "slender"],
    "antonyms": ["wide", "broad", "expansive", "extensive"]
  },
  "tall": {
    "synonyms": ["high", "lofty", "towering", "elevated", "soaring"],
    "antonyms": ["short", "low", "small"]
  },
  "short": {
    "synonyms": ["brief", "concise", "compact", "little", "small"],
    "antonyms": ["tall", "long", "high", "extended"]
  },
  "long": {
    "synonyms": ["extended", "lengthy", "prolonged", "protracted", "extensive"],
    "antonyms": ["short", "brief", "concise"]
  },
  "near": {
    "synonyms": ["close", "nearby", "adjacent", "neighboring", "proximate"],
    "antonyms": ["far", "distant", "remote"]
  },
  "far": {
    "synonyms": ["distant", "remote", "removed", "faraway"],
    "antonyms": ["near", "close", "nearby", "adjacent"]
  },
  "early": {
    "synonyms": ["premature", "advance", "beforehand", "prompt", "timely"],
    "antonyms": ["late", "tardy", "delayed", "overdue"]
  },
  "late": {
    "synonyms": ["tardy", "delayed", "overdue", "belated"],
    "antonyms": ["early", "prompt", "timely", "punctual"]
  },
  "right": {
    "synonyms": ["correct", "accurate", "proper", "appropriate", "suitable"],
    "antonyms": ["wrong", "incorrect", "improper", "inappropriate"]
  },
  "wrong": {
    "synonyms": ["incorrect", "mistaken", "erroneous", "false", "inaccurate"],
    "antonyms": ["right", "correct", "accurate", "proper"]
  },
  "true": {
    "synonyms": ["accurate", "correct", "genuine", "authentic", "real", "valid"],
    "antonyms": ["false", "incorrect", "untrue", "fake"]
  },
  "false": {
    "synonyms": ["untrue", "incorrect", "fake", "fraudulent", "bogus"],
    "antonyms": ["true", "accurate", "correct", "genuine"]
  },
  "better": {
    "synonyms": ["superior", "improved", "enhanced", "greater", "finer"],
    "antonyms": ["worse", "inferior", "poorer"]
  },
  "worse": {
    "synonyms": ["inferior", "poorer", "lesser", "deteriorated"],
    "antonyms": ["better", "superior", "improved"]
  },
  "best": {
    "synonyms": ["finest", "supreme", "optimal", "top", "greatest"],
    "antonyms": ["worst", "poorest", "lowest"]
  },
  "worst": {
    "synonyms": ["poorest", "lowest", "most terrible"],
    "antonyms": ["best", "finest", "greatest"]
  },
  "same": {
    "synonyms": ["identical", "equal", "equivalent", "alike", "similar"],
    "antonyms": ["different", "distinct", "unlike", "dissimilar"]
  },
  "different": {
    "synonyms": ["distinct", "unlike", "dissimilar", "varied", "diverse"],
    "antonyms": ["same", "identical", "equal", "similar"]
  },
  "simple": {
    "synonyms": ["easy", "plain", "basic", "straightforward", "uncomplicated"],
    "antonyms": ["complex", "complicated", "difficult", "intricate"]
  },
  "complex": {
    "synonyms": ["complicated", "intricate", "elaborate", "involved", "sophisticated"],
    "antonyms": ["simple", "easy", "plain", "basic"]
  },
  "possible": {
    "synonyms": ["feasible", "viable", "achievable", "attainable", "doable"],
    "antonyms": ["impossible", "unattainable", "unfeasible"]
  },
  "impossible": {
    "synonyms": ["unattainable", "unfeasible", "unachievable", "impractical"],
    "antonyms": ["possible", "feasible", "achievable"]
  },
  "certain": {
    "synonyms": ["sure", "definite", "positive", "confident", "assured"],
    "antonyms": ["uncertain", "doubtful", "unsure", "questionable"]
  },
  "uncertain": {
    "synonyms": ["doubtful", "unsure", "questionable", "dubious", "unclear"],
    "antonyms": ["certain", "sure", "definite", "positive"]
  },
  "safe": {
    "synonyms": ["secure", "protected", "sheltered", "guarded", "harmless"],
    "antonyms": ["dangerous", "unsafe", "risky", "hazardous"]
  },
  "dangerous": {
    "synonyms": ["hazardous", "risky", "perilous", "unsafe", "threatening"],
    "antonyms": ["safe", "secure", "harmless"]
  },
  "smooth": {
    "synonyms": ["even", "level", "flat", "sleek", "polished"],
    "antonyms": ["rough", "uneven", "bumpy", "coarse"]
  },
  "rough": {
    "synonyms": ["uneven", "bumpy", "coarse", "jagged", "rugged"],
    "antonyms": ["smooth", "even", "level", "flat"]
  },
  "loose": {
    "synonyms": ["slack", "relaxed", "free", "unfastened", "detached"],
    "antonyms": ["tight", "firm", "secure", "fastened"]
  },
  "tight": {
    "synonyms": ["firm", "secure", "snug", "taut", "rigid"],
    "antonyms": ["loose", "slack", "relaxed"]
  },
  "deep": {
    "synonyms": ["profound", "bottomless", "extensive", "thorough"],
    "antonyms": ["shallow", "superficial", "surface"]
  },
  "shallow": {
    "synonyms": ["superficial", "surface", "slight", "trivial"],
    "antonyms": ["deep", "profound", "extensive"]
  },
  "heavy": {
    "synonyms": ["weighty", "hefty", "massive", "ponderous", "burdensome"],
    "antonyms": ["light", "lightweight", "airy"]
  },
  "light": {
    "synonyms": ["lightweight", "airy", "delicate", "slight", "gentle"],
    "antonyms": ["heavy", "weighty", "massive"]
  },
  "sharp": {
    "synonyms": ["keen", "pointed", "acute", "cutting", "piercing"],
    "antonyms": ["dull", "blunt", "rounded"]
  },
  "dull": {
    "synonyms": ["blunt", "boring", "uninteresting", "tedious", "monotonous"],
    "antonyms": ["sharp", "keen", "interesting", "exciting"]
  },
  "open": {
    "synonyms": ["unlocked", "accessible", "available", "uncovered", "exposed"],
    "antonyms": ["closed", "shut", "locked", "sealed"]
  },
  "closed": {
    "synonyms": ["shut", "locked", "sealed", "fastened"],
    "antonyms": ["open", "unlocked", "accessible"]
  },
  "give": {
    "synonyms": ["provide", "grant", "offer", "donate", "present", "contribute"],
    "antonyms": ["take", "receive", "withhold", "keep"]
  },
  "take": {
    "synonyms": ["seize", "grab", "capture", "accept", "receive"],
    "antonyms": ["give", "provide", "offer", "donate"]
  },
  "find": {
    "synonyms": ["discover", "locate", "uncover", "detect", "spot"],
    "antonyms": ["lose", "misplace", "miss"]
  },
  "lose": {
    "synonyms": ["misplace", "forfeit", "surrender", "miss"],
    "antonyms": ["find", "discover", "locate", "win"]
  },
  "win": {
    "synonyms": ["triumph", "succeed", "prevail", "conquer", "achieve"],
    "antonyms": ["lose", "fail", "forfeit"]
  },
  "build": {
    "synonyms": ["construct", "create", "erect", "assemble", "establish"],
    "antonyms": ["destroy", "demolish", "break", "dismantle"]
  },
  "destroy": {
    "synonyms": ["demolish", "ruin", "wreck", "devastate", "annihilate"],
    "antonyms": ["build", "construct", "create", "preserve"]
  },
  "remember": {
    "synonyms": ["recall", "recollect", "reminisce", "retain", "memorize"],
    "antonyms": ["forget", "overlook", "neglect"]
  },
  "forget": {
    "synonyms": ["overlook", "neglect", "omit", "disregard"],
    "antonyms": ["remember", "recall", "recollect"]
  },
  "increase": {
    "synonyms": ["grow", "expand", "enlarge", "boost", "enhance", "augment"],
    "antonyms": ["decrease", "reduce", "diminish", "lessen"]
  },
  "decrease": {
    "synonyms": ["reduce", "diminish", "lessen", "lower", "decline"],
    "antonyms": ["increase", "grow", "expand", "boost"]
  },
  "accept": {
    "synonyms": ["receive", "take", "approve", "embrace", "acknowledge"],
    "antonyms": ["reject", "refuse", "decline", "deny"]
  },
  "reject": {
    "synonyms": ["refuse", "decline", "deny", "dismiss", "repudiate"],
    "antonyms": ["accept", "receive", "approve", "embrace"]
  },
  "allow": {
    "synonyms": ["permit", "authorize", "enable", "approve", "let"],
    "antonyms": ["forbid", "prohibit", "prevent", "ban"]
  },
  "forbid": {
    "synonyms": ["prohibit", "ban", "prevent", "disallow", "bar"],
    "antonyms": ["allow", "permit", "authorize", "enable"]
  },
  "push": {
    "synonyms": ["shove", "thrust", "press", "propel", "drive"],
    "antonyms": ["pull", "drag", "draw", "tug"]
  },
  "pull": {
    "synonyms": ["drag", "draw", "tug", "haul", "yank"],
    "antonyms": ["push", "shove", "thrust"]
  },
  "raise": {
    "synonyms": ["lift", "elevate", "hoist", "boost", "increase"],
    "antonyms": ["lower", "drop", "decrease", "reduce"]
  },
  "lower": {
    "synonyms": ["drop", "decrease", "reduce", "diminish", "depress"],
    "antonyms": ["raise", "lift", "elevate", "increase"]
  },
  "join": {
    "synonyms": ["connect", "unite", "combine", "merge", "link"],
    "antonyms": ["separate", "divide", "split", "disconnect"]
  },
  "separate": {
    "synonyms": ["divide", "split", "disconnect", "detach", "isolate"],
    "antonyms": ["join", "connect", "unite", "combine"]
  },
  "attack": {
    "synonyms": ["assault", "strike", "raid", "charge", "invade"],
    "antonyms": ["defend", "protect", "guard", "shield"]
  },
  "defend": {
    "synonyms": ["protect", "guard", "shield", "safeguard", "secure"],
    "antonyms": ["attack", "assault", "strike"]
  },
  "arrive": {
    "synonyms": ["reach", "come", "appear", "land", "enter"],
    "antonyms": ["depart", "leave", "exit", "go"]
  },
  "depart": {
    "synonyms": ["leave", "exit", "go", "withdraw", "vacate"],
    "antonyms": ["arrive", "reach", "come", "enter"]
  },
  "enter": {
    "synonyms": ["access", "penetrate", "join", "enroll"],
    "antonyms": ["exit", "leave", "depart"]
  },
  "exit": {
    "synonyms": ["leave", "depart", "withdraw", "evacuate"],
    "antonyms": ["enter", "access", "join"]
  },
  "include": {
    "synonyms": ["contain", "comprise", "incorporate", "encompass"],
    "antonyms": ["exclude", "omit", "eliminate", "remove"]
  },
  "exclude": {
    "synonyms": ["omit", "eliminate", "remove", "bar", "prohibit"],
    "antonyms": ["include", "contain", "incorporate"]
  },
  "succeed": {
    "synonyms": ["triumph", "prevail", "prosper", "flourish", "achieve"],
    "antonyms": ["fail", "lose", "falter", "flounder"]
  },
  "fail": {
    "synonyms": ["falter", "flounder", "collapse", "flop"],
    "antonyms": ["succeed", "triumph", "prevail", "achieve"]
  },
  "buy": {
    "synonyms": ["purchase", "acquire", "obtain", "procure"],
    "antonyms": ["sell", "vend", "trade"]
  },
  "sell": {
    "synonyms": ["vend", "trade", "market", "retail"],
    "antonyms": ["buy", "purchase", "acquire"]
  },
  "create": {
    "synonyms": ["make", "produce", "generate", "form", "design"],
    "antonyms": ["destroy", "demolish", "eliminate"]
  },
  "show": {
    "synonyms": ["display", "exhibit", "reveal", "demonstrate", "present"],
    "antonyms": ["hide", "conceal", "cover", "obscure"]
  },
  "hide": {
    "synonyms": ["conceal", "cover", "obscure", "mask", "camouflage"],
    "antonyms": ["show", "display", "reveal", "expose"]
  },
  "gain": {
    "synonyms": ["acquire", "obtain", "earn", "achieve", "attain"],
    "antonyms": ["lose", "forfeit", "surrender"]
  },
  "save": {
    "synonyms": ["rescue", "preserve", "protect", "conserve", "store"],
    "antonyms": ["waste", "squander", "spend"]
  },
  "spend": {
    "synonyms": ["expend", "use", "exhaust", "waste"],
    "antonyms": ["save", "conserve", "preserve"]
  },
  "fix": {
    "synonyms": ["repair", "mend", "correct", "remedy", "restore"],
    "antonyms": ["break", "damage", "harm", "destroy"]
  },
  "break": {
    "synonyms": ["shatter", "crack", "fracture", "damage", "destroy"],
    "antonyms": ["fix", "repair", "mend", "restore"]
  },
  "continue": {
    "synonyms": ["proceed", "persist", "persevere", "maintain", "carry on"],
    "antonyms": ["stop", "cease", "halt", "discontinue"]
  },
  "stop": {
    "synonyms": ["cease", "halt", "discontinue", "terminate", "end"],
    "antonyms": ["continue", "proceed", "persist", "start"]
  }
};
