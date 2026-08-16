export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideSource = {
  label: string;
  url: string;
};

export type Guide = {
  title: string;
  description: string;
  category: "Relationships" | "Fishing" | "Farm" | "Items" | "Setup";
  keyword: string;
  slug: string;
  href: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  quickAnswer: string;
  takeaways: string[];
  sections: GuideSection[];
  sources: GuideSource[];
};

export const guides: Guide[] = [
  {
    title: "Gift Guide",
    description: "Daily gift rules and easy presents for building friendship.",
    category: "Relationships",
    keyword: "fields of mistria gift guide",
    slug: "gift-guide",
    href: "/guides/gift-guide/",
    image: "/images/screenshots/relationships.png",
    imageAlt: "Fields of Mistria villagers beside the river in fall",
    imageCaption: "Official Fields of Mistria screenshot · NPC Studio press kit",
    quickAnswer: "Give one useful gift per character each day, talk whenever you pass them, and save stronger gifts for birthdays.",
    takeaways: ["One gift per character per day", "Common liked gifts are sustainable", "The relationship menu records discoveries"],
    sections: [],
    sources: [
      { label: "Community wiki: Friendship and gifts", url: "https://fieldsofmistria.wiki.gg/wiki/Friendship#Gifts" },
      { label: "PC Gamer: Marriage candidates and gifts", url: "https://www.pcgamer.com/games/life-sim/fields-of-mistria-marriage-candidates-gift-guide/" },
    ],
  },
  {
    title: "Characters",
    description: "A clear introduction to villagers and romance candidates.",
    category: "Relationships",
    keyword: "fields of mistria characters",
    slug: "characters",
    href: "/guides/characters/",
    image: "/images/screenshots/farming.png",
    imageAlt: "The player speaking with Josephine during a spring festival",
    imageCaption: "Official character screenshot · NPC Studio press kit",
    quickAnswer: "Mistria has 30+ villagers to meet, including 12 marriage candidates. Start with the people on your normal town route instead of trying to befriend everyone at once.",
    takeaways: ["12 marriage candidates", "30+ villagers in town", "Profiles track birthdays and preferences"],
    sections: [
      {
        heading: "Who lives in Mistria?",
        paragraphs: ["The cast includes romance candidates, shopkeepers, town officials, families, and visitors tied to the story. The official site is the safest place to confirm the current headline cast, while the community wiki is better for schedules and individual profiles."],
        bullets: ["Romance candidates have heart events and relationship progression.", "Shopkeepers and service NPCs anchor useful daily routes.", "Some character details unlock as the story and town rank progress."],
      },
      {
        heading: "A practical way to meet everyone",
        paragraphs: ["Use the town map and your normal errands as a social route. Talk to people near the general store, inn, blacksmith, museum, and beach instead of crossing the whole map for a single conversation."],
        bullets: ["Check birthdays on the calendar.", "Carry a few broadly useful gifts rather than a full inventory.", "Open a character profile after discovering a liked or disliked gift."],
      },
      {
        heading: "Choosing who to focus on",
        paragraphs: ["There is no need to optimize every relationship immediately. Pick characters whose schedules overlap with your farming, fishing, or shopping routine, then expand your circle when the route feels natural."],
      },
    ],
    sources: [
      { label: "Official Fields of Mistria site", url: "https://www.fieldsofmistria.com/" },
      { label: "Community wiki: Characters", url: "https://fieldsofmistria.wiki.gg/wiki/Characters" },
    ],
  },
  {
    title: "Romance Guide",
    description: "How dating, heart events, and relationships fit together.",
    category: "Relationships",
    keyword: "fields of mistria romance guide",
    slug: "romance-guide",
    href: "/guides/romance-guide/",
    image: "/images/screenshots/fishing.png",
    imageAlt: "Celine sharing hot cocoa with the player in winter",
    imageCaption: "Official Celine relationship screenshot · NPC Studio press kit",
    quickAnswer: "Build hearts by talking and gifting, watch the character's heart events, and use the dating path only when you are ready to progress that relationship.",
    takeaways: ["Friendship comes before dating", "Heart events carry the character story", "Marriage is part of the 1.0 relationship path"],
    sections: [
      {
        heading: "How romance progression works",
        paragraphs: ["Romance grows from the same basics as friendship: regular conversation, suitable gifts, birthdays, and heart events. A high heart count is only part of the path; the character scenes explain the relationship and should not be treated as optional filler."],
      },
      {
        heading: "Efficient without feeling mechanical",
        paragraphs: ["Choose one or two candidates you already pass during chores. Keep an easy liked gift on hand and watch the calendar, then let heart events set the pace."],
        bullets: ["Talk during normal errands.", "Use discovered gift preferences instead of guessing repeatedly.", "Avoid rushing rare loved gifts when an easy liked gift is available."],
      },
      {
        heading: "Dating, marriage, and saves",
        paragraphs: ["The 1.0 update added the complete marriage path. Relationship choices are version-sensitive, so check the official FAQ before making assumptions based on Early Access videos or old guides."],
      },
    ],
    sources: [
      { label: "Official 1.0 update FAQ", url: "https://www.fieldsofmistria.com/post/fields-of-mistria-1-0-update-faq" },
      { label: "PC Gamer: Romance and marriage walkthrough", url: "https://www.pcgamer.com/games/life-sim/fields-of-mistria-romance-marriage-dates-walkthrough/" },
    ],
  },
  {
    title: "Marriage Guide",
    description: "Marriage requirements and what to prepare before proposing.",
    category: "Relationships",
    keyword: "fields of mistria marriage guide",
    slug: "marriage-guide",
    href: "/guides/marriage-guide/",
    image: "/images/screenshots/relationships.png",
    imageAlt: "Fields of Mistria villagers gathering by the river",
    imageCaption: "Official Fields of Mistria screenshot · NPC Studio press kit",
    quickAnswer: "Finish the chosen candidate's relationship progression before preparing a proposal. Do not rely on Early Access checklists, because marriage arrived with version 1.0.",
    takeaways: ["Marriage is a 1.0 feature", "Heart events are part of the route", "Children are optional according to the official FAQ"],
    sections: [
      {
        heading: "Before you propose",
        paragraphs: ["Treat marriage as the end of a relationship storyline, not a shortcut unlocked by gifts alone. Keep progressing hearts, complete the available events, and follow the current in-game prompts."],
        bullets: ["Choose a candidate and follow their full event chain.", "Keep the home and daily routine ready for a spouse.", "Confirm requirements against a current 1.0 source."],
      },
      {
        heading: "Why old guides can be wrong",
        paragraphs: ["Early Access coverage often ends before dating or marriage. If a video says a feature is unavailable, check its publication date and compare it with the official 1.0 FAQ."],
      },
      {
        heading: "Life after the wedding",
        paragraphs: ["Marriage adds domestic relationship content without forcing every optional family choice. The official FAQ confirms that children are optional, so players can choose the household path they prefer."],
      },
    ],
    sources: [
      { label: "Official 1.0 update FAQ", url: "https://www.fieldsofmistria.com/post/fields-of-mistria-1-0-update-faq" },
      { label: "PC Gamer: Romance and marriage walkthrough", url: "https://www.pcgamer.com/games/life-sim/fields-of-mistria-romance-marriage-dates-walkthrough/" },
    ],
  },
  {
    title: "Fish Guide",
    description: "Fish locations, seasons, weather, and catch conditions.",
    category: "Fishing",
    keyword: "fields of mistria fish guide",
    slug: "fish-guide",
    href: "/guides/fish-guide/",
    image: "/images/screenshots/relationships.png",
    imageAlt: "A fishing spot beside the river in Fields of Mistria",
    imageCaption: "Official riverside screenshot · NPC Studio press kit",
    quickAnswer: "Identify the water type, season, weather, and shadow size before hunting a specific fish. Use the museum list to turn random fishing into a checklist.",
    takeaways: ["Pond, river, ocean, and mine pools differ", "Season and weather can matter", "Shadow size narrows the target"],
    sections: [
      {
        heading: "Four checks before casting",
        paragraphs: ["A fish entry can depend on more than location. Check the current season, weather, water area, and the size of the visible shadow before spending the day at one spot."],
        bullets: ["Water: pond, river, ocean, or mine pool.", "Timing: season and, for some catches, weather.", "Identification: shadow size and rarity."],
      },
      {
        heading: "Build a museum route",
        paragraphs: ["Compare your museum gaps with the fishable-item list, then group missing catches by area. A single river or beach trip is more efficient when it targets several fish that share conditions."],
      },
      {
        heading: "Rods, bait, and skill progression",
        paragraphs: ["Better tools and fishing skills improve the activity, but they do not replace spawn conditions. Upgrade when convenient, then keep the catch checklist focused on the correct habitat and timing."],
      },
    ],
    sources: [
      { label: "Community wiki: Fishable items", url: "https://fieldsofmistria.wiki.gg/wiki/Category%3AFishable_Item" },
      { label: "Community wiki: Fishing", url: "https://fieldsofmistria.wiki.gg/wiki/Fishing" },
    ],
  },
  {
    title: "Legendary Fish",
    description: "A focused checklist for finding legendary fish.",
    category: "Fishing",
    keyword: "fields of mistria legendary fish",
    slug: "legendary-fish",
    href: "/guides/legendary-fish/",
    image: "/images/screenshots/relationships.png",
    imageAlt: "The player fishing in a river in Fields of Mistria",
    imageCaption: "Official fishing-area screenshot · NPC Studio press kit",
    quickAnswer: "Unlock the Legendary fishing skill, check the daily tip, and match the named fish to its season, weather, water area, and shadow before searching.",
    takeaways: ["Legendary skill required", "Four seasonal legendary fish", "Area resets can refresh visible shadows"],
    sections: [
      {
        heading: "The legendary checklist",
        paragraphs: ["The legendary set consists of Cherry Fish, Lightning Fish, Leaf Fish, and Snow Fish. Each has a particular combination of season, weather, habitat, and shadow size."],
        bullets: ["Unlock the Legendary skill first.", "Read the daily fishing tip for a nearby legendary notice.", "Confirm the correct area and visible shadow before casting."],
      },
      {
        heading: "Refresh the fishing area",
        paragraphs: ["When the correct shadow is absent, leave and re-enter the area to refresh visible fish. This is more focused than casting at every shadow while hoping for the target."],
      },
      {
        heading: "Do not waste the weather window",
        paragraphs: ["Prepare stamina, inventory space, and travel time before a required weather day. Legendary hunting is easiest when the rest of the day is already planned around the target area."],
      },
    ],
    sources: [
      { label: "Community wiki: Legendary Fish", url: "https://fieldsofmistria.wiki.gg/wiki/Fishing#Legendary_Fish" },
      { label: "Player discussion: Legendary fish tips", url: "https://www.reddit.com/r/FieldsOfMistriaGame/comments/1k14ct8/legendary_fish_tips/" },
    ],
  },
  {
    title: "Farm Layout",
    description: "Layout inspiration and practical planning ideas.",
    category: "Farm",
    keyword: "fields of mistria farm layout",
    slug: "farm-layout",
    href: "/guides/farm-layout/",
    image: "/images/screenshots/farm-and-town.png",
    imageAlt: "The farmhouse, crop fields, and garden in Fields of Mistria",
    imageCaption: "Official farm screenshot · NPC Studio press kit",
    quickAnswer: "Design around short daily routes first: house to crops, animals, storage, and exits. Add decorative districts only after the working paths feel comfortable.",
    takeaways: ["Plan paths before decoration", "Separate crop, ranch, and orchard zones", "Use a planner before moving everything in-game"],
    sections: [
      {
        heading: "Start with movement, not symmetry",
        paragraphs: ["A beautiful farm can still be frustrating if every chore requires a long detour. Mark the paths you walk every morning, then place crops, storage, and animal areas around those routes."],
      },
      {
        heading: "Useful farm districts",
        paragraphs: ["Large shared layouts commonly separate production from decoration. A crop field, ranch, orchard, storage/work area, and social or decorative corner are easier to revise than one tightly packed block."],
        bullets: ["Keep frequently used chests near the relevant work zone.", "Leave paths wide enough to read at a glance.", "Reserve empty space for later unlocks and seasonal redesigns."],
      },
      {
        heading: "Prototype before rebuilding",
        paragraphs: ["The community layout planner can import a save and lets you test placement away from the game. Use it to compare two or three concepts before committing to a major rebuild."],
      },
    ],
    sources: [
      { label: "Mistria community layout planner", url: "https://mistria.app/planner/" },
      { label: "Player example: Year 4 farm layout", url: "https://www.reddit.com/r/FieldsOfMistriaGame/comments/1k23nhh/farm_layout_year_4_diamond_town_rank/" },
    ],
  },
  {
    title: "Best Crops",
    description: "Compare useful crops by season and purpose.",
    category: "Farm",
    keyword: "fields of mistria best crops",
    slug: "best-crops",
    href: "/guides/best-crops/",
    image: "/images/screenshots/farm-and-town.png",
    imageAlt: "Seasonal crop plots beside the farmhouse",
    imageCaption: "Official farming screenshot · NPC Studio press kit",
    quickAnswer: "There is no single best crop for every goal. Compare remaining growth days, regrowth, seed cost, sale value, recipes, requests, and museum needs before planting.",
    takeaways: ["Profit is only one use", "Calendar days limit late planting", "Keep some harvests for recipes and requests"],
    sections: [
      {
        heading: "Choose crops by purpose",
        paragraphs: ["A high sale price does not automatically make a crop best. Fast harvests help with early cash, regrowing plants reward longer planning, and low-value crops can still matter for cooking, gifts, requests, or museum sets."],
      },
      {
        heading: "Check the season calendar",
        paragraphs: ["Before buying seeds, count the days left in the season and compare them with the crop's growth time. Late-season seeds that cannot mature are an immediate loss."],
        bullets: ["Reserve enough days for the first harvest.", "For regrowing crops, count how many repeat harvests remain.", "Plant a mixed plot when you still need recipes or donations."],
      },
      {
        heading: "A balanced planting rule",
        paragraphs: ["Use most of the field for your current money crop, a smaller area for cooking and requests, and a small sample of everything needed for collections. Recheck the wiki after balance updates because values can change."],
      },
    ],
    sources: [
      { label: "Community wiki: Crops", url: "https://fieldsofmistria.wiki.gg/wiki/Crops" },
      { label: "Official Fields of Mistria site", url: "https://www.fieldsofmistria.com/" },
    ],
  },
  {
    title: "Animals",
    description: "Animal care, products, breeding, and useful routines.",
    category: "Farm",
    keyword: "fields of mistria animals guide",
    slug: "animals-guide",
    href: "/guides/animals-guide/",
    image: "/images/screenshots/farm-and-town.png",
    imageAlt: "A working farm area in Fields of Mistria",
    imageCaption: "Official farm screenshot · NPC Studio press kit",
    quickAnswer: "Add animals at a pace your daily route can support. Reliable feeding, interaction, shelter, and product collection matter more than buying a large herd immediately.",
    takeaways: ["Build a repeatable care route", "Keep feed and storage nearby", "Animal products support crafting and cooking"],
    sections: [
      {
        heading: "Set up before expanding",
        paragraphs: ["Place animal buildings where you can reach them from the house and main exit without weaving through crops. Store feed and product tools close to the enclosure."],
      },
      {
        heading: "The daily care loop",
        paragraphs: ["Check feed, interact with animals, collect products, and make sure the day's conditions are suitable before leaving for town. A simple loop prevents care from consuming the entire morning."],
      },
      {
        heading: "Products and breeding",
        paragraphs: ["Animal products feed into cooking, crafting, requests, and income. Breeding and color collection are longer-term goals, so confirm current mechanics and variants on the wiki before planning a specialized barn."],
      },
    ],
    sources: [
      { label: "Community wiki: Animals", url: "https://fieldsofmistria.wiki.gg/wiki/Animals" },
      { label: "Official Fields of Mistria site", url: "https://www.fieldsofmistria.com/" },
    ],
  },
  {
    title: "Cooking Recipes",
    description: "Where recipes come from and what dishes require.",
    category: "Items",
    keyword: "fields of mistria cooking recipes",
    slug: "cooking-recipes",
    href: "/guides/cooking-recipes/",
    image: "/images/screenshots/mining.png",
    imageAlt: "March speaking to the player inside a Mistria shop",
    imageCaption: "Official town-shop screenshot · NPC Studio press kit",
    quickAnswer: "Treat recipes as a collection: record where each recipe comes from, keep a small ingredient reserve, and cook for stamina, gifts, requests, and collection progress.",
    takeaways: ["Recipes come from multiple activities", "Do not sell every ingredient", "Higher-level recipes may require progression"],
    sections: [
      {
        heading: "Where recipes come from",
        paragraphs: ["Recipes are acquired through progression, shops, requests, events, and other game activities. If a dish is missing from the cooking menu, confirm that you own the recipe before hunting for ingredients."],
      },
      {
        heading: "Build an ingredient pantry",
        paragraphs: ["Keep a small stack of seasonal crops, forage, fish, and animal products instead of selling the entire harvest. This makes new recipes and sudden requests much easier to complete."],
        bullets: ["Keep one storage area for cooking ingredients.", "Replace common ingredients after each harvest.", "Check loved gifts before consuming a rare dish."],
      },
      {
        heading: "Use the recipe list as a checklist",
        paragraphs: ["Filter missing dishes by unavailable recipe, unavailable ingredient, or insufficient cooking progression. That distinction prevents wasted time gathering ingredients for a dish you cannot prepare yet."],
      },
    ],
    sources: [
      { label: "Community wiki: Cooking", url: "https://fieldsofmistria.wiki.gg/wiki/Cooking" },
      { label: "Community wiki home", url: "https://fieldsofmistria.wiki.gg/wiki/Fields_of_Mistria_Wiki" },
    ],
  },
  {
    title: "Museum Guide",
    description: "Track donations and avoid missing useful collectibles.",
    category: "Items",
    keyword: "fields of mistria museum guide",
    slug: "museum-guide",
    href: "/guides/museum-guide/",
    image: "/images/screenshots/home-and-crafting.png",
    imageAlt: "The player meeting Caldarus during a rainy story scene",
    imageCaption: "Official story screenshot · NPC Studio press kit",
    quickAnswer: "Check each item for an undonated museum entry before selling or crafting it. Organize missing pieces by season and activity so you can collect several in one trip.",
    takeaways: ["Donate the first copy when practical", "Track seasonal gaps", "Group searches by fishing, mining, forage, and archaeology"],
    sections: [
      {
        heading: "Turn the museum into a route",
        paragraphs: ["Do not search for one missing item at a time. Group the checklist by location, season, weather, or activity, then plan a fishing, mining, forage, or archaeology day around several gaps."],
      },
      {
        heading: "Keep a donation buffer",
        paragraphs: ["When you are unsure whether an item has been donated, place the first copy in a museum chest or check the collection record before selling it. This is especially helpful for rare or seasonal finds."],
      },
      {
        heading: "Prioritize expiring opportunities",
        paragraphs: ["Seasonal fish and forage should come before items available year-round. At the end of each season, review the remaining seasonal entries before using extra days for ordinary resources."],
      },
    ],
    sources: [
      { label: "Community wiki: Museum", url: "https://fieldsofmistria.wiki.gg/wiki/Museum" },
      { label: "Community wiki home", url: "https://fieldsofmistria.wiki.gg/wiki/Fields_of_Mistria_Wiki" },
    ],
  },
  {
    title: "Mods Guide",
    description: "A careful overview of modding and compatibility basics.",
    category: "Setup",
    keyword: "fields of mistria mods",
    slug: "mods-guide",
    href: "/guides/mods-guide/",
    image: "/images/screenshots/home-and-crafting.png",
    imageAlt: "A magical story scene from Fields of Mistria",
    imageCaption: "Official Fields of Mistria screenshot · NPC Studio press kit",
    quickAnswer: "Back up saves, verify game-version compatibility, and read every dependency before installing a mod. Recheck the loader after game updates.",
    takeaways: ["Mods are unofficial", "Version compatibility matters", "Back up saves before changes"],
    sections: [
      {
        heading: "Before installing anything",
        paragraphs: ["Mods are community-made and can stop working after an update. Record your game version, back up saves, and read the description, requirements, and recent comments on the mod page."],
      },
      {
        heading: "Using a mod installer",
        paragraphs: ["The community MOMI project documents installation on Windows and Steam Deck. Follow its current README rather than an old video, because engine and loader changes can alter the process."],
        bullets: ["Download tools only from their documented project pages.", "Install required dependencies first.", "Keep a list of active mods for troubleshooting."],
      },
      {
        heading: "After a game update",
        paragraphs: ["If the game stops launching, test without mods before assuming the base game is broken. The installer documentation warns that mod support may need to be reapplied or updated after patches."],
      },
    ],
    sources: [
      { label: "Nexus Mods: Fields of Mistria", url: "https://www.nexusmods.com/games/fieldsofmistria" },
      { label: "MOMI installer documentation", url: "https://github.com/Garethp/Mods-of-Mistria-Installer/blob/main/README.md" },
    ],
  },
  {
    title: "Switch Availability",
    description: "Current platform information and release status.",
    category: "Setup",
    keyword: "fields of mistria switch",
    slug: "switch-availability",
    href: "/guides/switch-availability/",
    image: "/images/screenshots/farming.png",
    imageAlt: "A colorful Fields of Mistria festival scene",
    imageCaption: "Official Fields of Mistria screenshot · NPC Studio press kit",
    quickAnswer: "Fields of Mistria launched for PC on Steam on August 5, 2026. The official press kit lists console platforms and timing as TBA, so there is no confirmed Switch date to publish yet.",
    takeaways: ["PC via Steam is confirmed", "Console release is TBA", "Ignore store pages without an official announcement"],
    sections: [
      {
        heading: "Current official status",
        paragraphs: ["NPC Studio's press kit lists the 1.0 PC release date as August 5, 2026 and the console release as TBA. Until an official post names a platform and date, a Switch launch should be treated as unconfirmed."],
      },
      {
        heading: "How to check for an announcement",
        paragraphs: ["Use the official website, news posts, and verified social channels. Search snippets and retailer placeholders can repeat rumors or estimated dates without being release announcements."],
      },
      {
        heading: "What PC players can use now",
        paragraphs: ["The released PC version is available through Steam. Check the Steam store page for current system requirements and support information before purchasing."],
      },
    ],
    sources: [
      { label: "Official Fields of Mistria press kit", url: "https://www.fieldsofmistria.com/presskit" },
      { label: "Official Steam store page", url: "https://store.steampowered.com/app/2142790/Fields_of_Mistria/" },
    ],
  },
  {
    title: "Beginner Guide",
    description: "A practical first-week route for new players.",
    category: "Setup",
    keyword: "fields of mistria beginner guide",
    slug: "beginner-guide",
    href: "/guides/beginner-guide/",
    image: "/images/screenshots/farm-and-town.png",
    imageAlt: "The starting farm and town landscape in Fields of Mistria",
    imageCaption: "Official farm screenshot · NPC Studio press kit",
    quickAnswer: "In the first week, learn the map, plant a manageable field, meet key shopkeepers, begin town requests, and explore one activity at a time. Do not spend all your money or stamina on day one.",
    takeaways: ["Keep the first crop field manageable", "Combine errands into one town route", "Save samples for requests and the museum"],
    sections: [
      {
        heading: "Your first priorities",
        paragraphs: ["Clear only the farm space you need, plant a field you can water comfortably, and learn where the general store, blacksmith, inn, museum, beach, and mines connect to your route."],
      },
      {
        heading: "A simple daily rhythm",
        paragraphs: ["Handle farm chores first, check the calendar and request board, then choose one main expedition: town errands, fishing, foraging, or mining. Return with enough time to store items and prepare for tomorrow."],
        bullets: ["Keep some money for seeds and upgrades.", "Carry only the tools needed for the day's main activity.", "Talk to villagers already on your route."],
      },
      {
        heading: "What not to sell immediately",
        paragraphs: ["Keep the first copy of unfamiliar fish, forage, artifacts, and useful ingredients until you check museum, request, recipe, and gift needs. Early storage is often worth more than a small one-time sale."],
      },
    ],
    sources: [
      { label: "Official Fields of Mistria site", url: "https://www.fieldsofmistria.com/" },
      { label: "Community wiki home", url: "https://fieldsofmistria.wiki.gg/wiki/Fields_of_Mistria_Wiki" },
    ],
  },
  {
    title: "Money Guide",
    description: "Reliable early-game ways to earn and spend wisely.",
    category: "Setup",
    keyword: "fields of mistria money guide",
    slug: "money-guide",
    href: "/guides/money-guide/",
    image: "/images/screenshots/mining.png",
    imageAlt: "The player visiting March's shop in Fields of Mistria",
    imageCaption: "Official shop screenshot · NPC Studio press kit",
    quickAnswer: "Use crops for predictable income and fill spare time with fishing, forage, and requests. Protect cash for seeds and high-impact upgrades instead of selling every useful material.",
    takeaways: ["Crops provide a predictable baseline", "Fishing turns spare stamina into sales", "Keep an upgrade and seed reserve"],
    sections: [
      {
        heading: "Build a dependable income base",
        paragraphs: ["Plant enough crops to create regular harvests without making watering consume the whole day. Use fishing and forage to add flexible income after chores are finished."],
      },
      {
        heading: "Sell extras, not your entire future",
        paragraphs: ["Before selling an unfamiliar item, check whether it is needed for the museum, a request, crafting, cooking, or a preferred gift. Keep a modest reserve and sell repeatable surplus."],
      },
      {
        heading: "Spend for time savings",
        paragraphs: ["Prioritize purchases that improve a repeated activity or unlock useful progression. Always keep enough cash for the next seed purchase, then compare upgrades by how much daily time or stamina they save."],
      },
    ],
    sources: [
      { label: "Community wiki home", url: "https://fieldsofmistria.wiki.gg/wiki/Fields_of_Mistria_Wiki" },
      { label: "Official Fields of Mistria site", url: "https://www.fieldsofmistria.com/" },
    ],
  },
  {
    title: "Release & Updates",
    description: "Key release milestones and major update information.",
    category: "Setup",
    keyword: "fields of mistria 1.0",
    slug: "release-updates",
    href: "/guides/release-updates/",
    image: "/images/screenshots/home-and-crafting.png",
    imageAlt: "Caldarus appearing in a rainy Fields of Mistria story scene",
    imageCaption: "Official 1.0-era screenshot · NPC Studio press kit",
    quickAnswer: "Fields of Mistria 1.0 released for PC on Steam on August 5, 2026. Check official posts for patch changes and treat Early Access guides as potentially outdated.",
    takeaways: ["PC 1.0 released August 5, 2026", "Marriage and later progression are now included", "Console timing remains TBA"],
    sections: [
      {
        heading: "What 1.0 means for guides",
        paragraphs: ["The full PC launch makes older Early Access guides unreliable for late-game progression, relationship conclusions, and changed systems. Always compare a guide's date with the current game version."],
      },
      {
        heading: "Major 1.0 areas to recheck",
        paragraphs: ["NPC Studio's FAQ covers the completed relationship and marriage path, later progression, and save compatibility questions. These are the first areas to verify when an old walkthrough disagrees with the current game."],
      },
      {
        heading: "Where to follow patches",
        paragraphs: ["Use the official website and Steam news for confirmed patch notes. Player reports are useful for spotting problems, but they should be checked against an official fix or reproducible in-game behavior."],
      },
    ],
    sources: [
      { label: "Official Fields of Mistria press kit", url: "https://www.fieldsofmistria.com/presskit" },
      { label: "Official 1.0 update FAQ", url: "https://www.fieldsofmistria.com/post/fields-of-mistria-1-0-update-faq" },
    ],
  },
];

export const dynamicGuides = guides.filter((guide) => guide.slug !== "gift-guide");

export function getGuide(slug: string) {
  return dynamicGuides.find((guide) => guide.slug === slug);
}
