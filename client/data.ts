export interface Board {
    id: number
    name: string
    description: string
    memberCount: number
    postCount: number
    joined: boolean
    createdAt: string
    colorClass: string
    dotColorClass: string
}
export const boards: Board[] = [
  {
    id: 1,
    name: "technology",
    description: "Hardware, software, gadgets, and the future of computing. Join to discuss the latest in tech.",
    memberCount: 241,
    postCount: 843,
    createdAt: "Jan 12, 2023",
    joined: false,
    colorClass: "bg-blue-100 text-blue-700",
    dotColorClass: "bg-blue-700"
  },
  {
    id: 2,
    name: "science",
    description: "Discoveries, research, and the wonders of the natural world. Share findings and ask questions.",
    memberCount: 187,
    postCount: 621,
    createdAt: "Jun 13, 2026",
    joined: false,
    colorClass: "bg-green-100 text-green-700",
    dotColorClass: "bg-green-700"
  },
  {
    id: 3,
    name: "gaming",
    description: "Video games, board games, retro classics and new releases. All platforms welcome here.",
    memberCount: 312,
    postCount: 1490,
    createdAt: "Jul 18, 2021",
    joined: false,
    colorClass: "bg-purple-100 text-purple-700",
    dotColorClass: "bg-purple-700"
  },
  {
    id: 4,
    name: "books",
    description: "Fiction, nonfiction, reading lists, and literary discussion for avid readers everywhere.",
    memberCount: 114,
    postCount: 432,
    createdAt: "May 7, 2022",
    joined: false,
    colorClass: "bg-red-100 text-red-700",
    dotColorClass: "bg-red-700"
  },
  {
    id: 5,
    name: "cooking",
    description: "Recipes, techniques, kitchen gear, and food culture from home cooks and professionals.",
    memberCount: 98,
    postCount: 511,
    createdAt: "Apr 30, 2023",
    joined: false,
    colorClass: "bg-orange-100 text-orange-700",
    dotColorClass: "bg-orange-700"
  },
  {
    id: 6,
    name: "paranormal",
    description: "Strange events, unexplained phenomena, and the mysteries that science hasn't solved yet.",
    memberCount: 54,
    postCount: 208,
    createdAt: "Sep 26, 2020",
    joined: true,
    colorClass: "bg-gray-200 text-gray-700",
    dotColorClass: "bg-gray-700"
  },
  {
    id: 7,
    name: "coding",
    description: "Programming languages, frameworks, tools, and debugging war stories.",
    memberCount: 176,
    postCount: 733,
    createdAt: "Dec 24, 2025",
    joined: true,
    colorClass: "bg-green-100 text-green-700",
    dotColorClass: "bg-green-700"
  },
  {
    id: 8,
    name: "lithuania",
    description: "News, culture, and everyday life in and around Lithuania.",
    memberCount: 63,
    postCount: 149,
    createdAt: "Aug 2, 2024",
    joined: true,
    colorClass: "bg-orange-100 text-orange-700",
    dotColorClass: "bg-orange-700"
  },
]

export interface RecentPost {
  id: number
  boardName: string
  title: string
  timeAgo: string
  upvotes: number
  commentCount: number
  dotColorClass: string
}
export const recentPosts: RecentPost[] = [
  {
    id: 2,
    boardName: "science",
    title: "New findings on deep-sea bioluminescence discussed",
    timeAgo: "8d ago",
    upvotes: 14,
    commentCount: 38,
    dotColorClass: "bg-blue-700",
  },
  {
    id: 3,
    boardName: "coding",
    title: "Open source tools I actually use every day. (no, this isn't an ad)",
    timeAgo: "1d ago",
    upvotes: 31,
    commentCount: 12,
    dotColorClass: "bg-green-700",
  },
  {
    id: 4,
    boardName: "gaming",
    title: "Haven't been outside in 5 days. Is anyone else suffering from a crippling gaming addiction?",
    timeAgo: "1d ago",
    upvotes: 31,
    commentCount: 12,
    dotColorClass: "bg-purple-700",
  },
  {
    id: 5,
    boardName: "books",
    title: "It's not the beans. This new book on quantum physics revolutionized how I make my coffee.",
    timeAgo: "1d ago",
    upvotes: 31,
    commentCount: 12,
    dotColorClass: "bg-red-700",
  }
]
  
export interface UserProfile {
    id: number
    username: string
    bio: string
    profilePictureUrl: string
    joinedAt: string
    postCount: number
    commentCount: number
    karma: number
    joinedBoardNames: string[]
}
export const currentUser: UserProfile = {
    id: 1,
    username: "paulius",
    bio: "learning to build things",
    profilePictureUrl: "",
    joinedAt: "2026-06-01T09:30:00Z",
    postCount: 5,
    commentCount: 8,
    karma: 62,
    joinedBoardNames: ["technology", "coding", "lithuania"]
}

export type Flair = "Discussion" | "News" | "PSA" | "Review" | "Question"

export interface BoardPost {
  id: number
  boardName: string
  authorUsername: string
  flair: Flair
  title: string
  excerpt: string
  createdAt: string
  score: number
  commentCount: number
}
export const posts: BoardPost[] = [
  {
    id: 1,
    boardName: "technology",
    authorUsername: "devjordan_",
    flair: "Discussion",
    title: "What's everyone's go-to laptop for software development?",
    excerpt:
      "I've been comparing Mac, Linux, and Windows machines for development. Curious what setups people are actually using day to day.",
    createdAt: "2026-08-14T16:48:00+03:00",
    score: 87,
    commentCount: 34,
  },
  {
    id: 2,
    boardName: "technology",
    authorUsername: "llm_watcher",
    flair: "News",
    title: "Are small AI models finally becoming good enough for local use?",
    excerpt:
      "I've been testing several lightweight models locally and the quality gap with larger cloud models seems smaller than it used to be.",
    createdAt: "2026-08-14T14:48:00+03:00",
    score: 214,
    commentCount: 67,
  },
  {
    id: 3,
    boardName: "technology",
    authorUsername: "privacyfirst99",
    flair: "PSA",
    title: "How much privacy do you actually get from browser privacy modes?",
    excerpt:
      "Incognito and similar modes are useful, but there's still a lot happening behind the scenes. What privacy tools are people relying on?",
    createdAt: "2026-08-14T12:48:00+03:00",
    score: 531,
    commentCount: 112,
  },
  {
    id: 4,
    boardName: "technology",
    authorUsername: "cables_and_chaos",
    flair: "Discussion",
    title: "Anyone else notice USB-C cable quality has gotten worse?",
    excerpt:
      "I've gone through several cables recently and some started having charging or data issues within months. What brands have held up for you?",
    createdAt: "2026-08-14T10:48:00+03:00",
    score: 43,
    commentCount: 29,
  },
  {
    id: 5,
    boardName: "technology",
    authorUsername: "repairability_nerd",
    flair: "Review",
    title: "Framework 16 after a year: was modularity worth it?",
    excerpt:
      "After using a modular laptop as my primary machine for a year, here's what impressed me and what still needs work.",
    createdAt: "2026-08-14T05:48:00+03:00",
    score: 168,
    commentCount: 55,
  },
  {
    id: 6,
    boardName: "technology",
    authorUsername: "home_lab",
    flair: "Review",
    title: "I finally built a tiny home server from old hardware",
    excerpt:
      "Turned an old mini PC into a surprisingly capable home server running containers, backups, and a few self-hosted services.",
    createdAt: "2026-08-13T23:48:00+03:00",
    score: 126,
    commentCount: 41,
  },
  {
    id: 7,
    boardName: "technology",
    authorUsername: "mechanicalkeys",
    flair: "Discussion",
    title: "What's the best tech purchase you've made under $100?",
    excerpt:
      "Looking for inexpensive gadgets that genuinely improved your daily routine rather than becoming drawer clutter.",
    createdAt: "2026-08-13T20:48:00+03:00",
    score: 302,
    commentCount: 93,
  },
  {
    id: 8,
    boardName: "technology",
    authorUsername: "linux_lurker",
    flair: "Discussion",
    title: "My first month using Linux exclusively on desktop",
    excerpt:
      "I expected more compatibility problems than I actually encountered. There were definitely some surprises, though.",
    createdAt: "2026-08-13T16:48:00+03:00",
    score: 191,
    commentCount: 72,
  },
  {
    id: 9,
    boardName: "technology",
    authorUsername: "future_gadget",
    flair: "Question",
    title: "Which current tech trend do you think will disappear in five years?",
    excerpt:
      "Every few years the industry gets obsessed with a new category. Which current trend feels most likely to become a footnote?",
    createdAt: "2026-08-13T11:48:00+03:00",
    score: 74,
    commentCount: 48,
  },
  {
    id: 10,
    boardName: "technology",
    authorUsername: "pixel_architect",
    flair: "Review",
    title: "My minimalist desk setup after years of collecting gadgets",
    excerpt:
      "I finally sold, donated, or stored most of the unnecessary gear and ended up with a much simpler workspace.",
    createdAt: "2026-08-12T17:48:00+03:00",
    score: 415,
    commentCount: 81,
  },
  {
    id: 11,
    boardName: "science",
    authorUsername: "astro_mara",
    flair: "Discussion",
    title: "What would the night sky look like from another planet?",
    excerpt:
      "I've been wondering how different the stars and planets would appear from Mars, Venus, or one of the outer planets.",
    createdAt: "2026-08-14T16:18:00+03:00",
    score: 238,
    commentCount: 46,
  },
  {
    id: 12,
    boardName: "science",
    authorUsername: "labrat42",
    flair: "Discussion",
    title: "What's a scientific discovery that completely changed your worldview?",
    excerpt:
      "Not necessarily the biggest discovery historically — just something that genuinely changed how you think about the universe.",
    createdAt: "2026-08-14T13:48:00+03:00",
    score: 351,
    commentCount: 104,
  },
  {
    id: 13,
    boardName: "science",
    authorUsername: "quantum_curious",
    flair: "Question",
    title: "Can someone explain quantum entanglement without the usual analogy?",
    excerpt:
      "I've read plenty of simplified explanations, but I'm looking for an intuitive explanation that doesn't rely on misleading metaphors.",
    createdAt: "2026-08-14T09:48:00+03:00",
    score: 182,
    commentCount: 61,
  },
  {
    id: 14,
    boardName: "science",
    authorUsername: "deep_sea",
    flair: "Discussion",
    title: "Why do deep-sea creatures look so bizarre?",
    excerpt:
      "The deeper you go, the stranger the adaptations become. What are some of the coolest examples?",
    createdAt: "2026-08-14T06:48:00+03:00",
    score: 267,
    commentCount: 58,
  },
  {
    id: 15,
    boardName: "science",
    authorUsername: "climate_data",
    flair: "News",
    title: "What climate change adaptation projects are actually working?",
    excerpt:
      "There is plenty of discussion about problems, but I'd love to hear about adaptation strategies that have shown measurable results.",
    createdAt: "2026-08-13T22:48:00+03:00",
    score: 143,
    commentCount: 37,
  },
  {
    id: 16,
    boardName: "science",
    authorUsername: "evolutionnerd",
    flair: "Discussion",
    title: "What is the strangest example of convergent evolution?",
    excerpt:
      "It's fascinating when unrelated species independently develop similar solutions to the same environmental pressures.",
    createdAt: "2026-08-13T18:48:00+03:00",
    score: 204,
    commentCount: 44,
  },
  {
    id: 17,
    boardName: "science",
    authorUsername: "marsbound",
    flair: "Discussion",
    title: "Would humans adapt physically to living on Mars?",
    excerpt:
      "Ignoring the engineering challenges for a moment, what biological changes might happen after generations on a lower-gravity world?",
    createdAt: "2026-08-13T12:48:00+03:00",
    score: 319,
    commentCount: 87,
  },
  {
    id: 18,
    boardName: "science",
    authorUsername: "fossil_hunter",
    flair: "Discussion",
    title: "What dinosaur discovery deserves more attention?",
    excerpt:
      "T. rex gets all the headlines, but there are countless fascinating dinosaurs that rarely make it into popular science.",
    createdAt: "2026-08-13T08:48:00+03:00",
    score: 156,
    commentCount: 52,
  },
  {
    id: 19,
    boardName: "science",
    authorUsername: "chemistry_cat",
    flair: "Discussion",
    title: "What's a chemistry fact that sounds completely made up?",
    excerpt:
      "Looking for those bizarre-but-true facts that make chemistry feel like a fictional science.",
    createdAt: "2026-08-12T21:48:00+03:00",
    score: 428,
    commentCount: 96,
  },
  {
    id: 20,
    boardName: "science",
    authorUsername: "science_teacher",
    flair: "Question",
    title: "Which science misconception do you encounter most often?",
    excerpt:
      "Teachers, researchers, and science enthusiasts: what misconception do you wish you could permanently erase?",
    createdAt: "2026-08-12T15:48:00+03:00",
    score: 367,
    commentCount: 119,
  },
  {
    id: 21,
    boardName: "gaming",
    authorUsername: "pixelwanderer",
    flair: "Discussion",
    title: "What's a game you wish you could experience again for the first time?",
    excerpt:
      "Some games have a special kind of magic that disappears once you know all the twists. Which one would you replay fresh?",
    createdAt: "2026-08-14T17:08:00+03:00",
    score: 512,
    commentCount: 143,
  },
  {
    id: 22,
    boardName: "gaming",
    authorUsername: "boss_fight",
    flair: "Question",
    title: "What's the hardest boss you've ever beaten?",
    excerpt:
      "Not necessarily the objectively hardest boss — which fight personally took you the longest to finally conquer?",
    createdAt: "2026-08-14T15:18:00+03:00",
    score: 284,
    commentCount: 91,
  },
  {
    id: 23,
    boardName: "gaming",
    authorUsername: "retro_save",
    flair: "Discussion",
    title: "Which old game still holds up surprisingly well?",
    excerpt:
      "I went back to some games from the early 2000s and was surprised by how playable they still feel today.",
    createdAt: "2026-08-14T11:48:00+03:00",
    score: 376,
    commentCount: 88,
  },
  {
    id: 24,
    boardName: "gaming",
    authorUsername: "indiequest",
    flair: "Question",
    title: "Recommend me an indie game I can finish in a weekend",
    excerpt:
      "Looking for something memorable that doesn't require 80 hours or a massive open world.",
    createdAt: "2026-08-14T08:48:00+03:00",
    score: 194,
    commentCount: 73,
  },
  {
    id: 25,
    boardName: "gaming",
    authorUsername: "cozycontroller",
    flair: "Discussion",
    title: "What game do you play when you just want to relax?",
    excerpt:
      "Sometimes I don't want competition, progression systems, or difficult combat. What's your comfort game?",
    createdAt: "2026-08-14T03:48:00+03:00",
    score: 441,
    commentCount: 126,
  },
  {
    id: 26,
    boardName: "gaming",
    authorUsername: "rpg_addict",
    flair: "Discussion",
    title: "Do modern RPGs have too much content?",
    excerpt:
      "I've started several huge RPGs recently and keep bouncing off because the amount of side content feels overwhelming.",
    createdAt: "2026-08-13T21:48:00+03:00",
    score: 327,
    commentCount: 102,
  },
  {
    id: 27,
    boardName: "gaming",
    authorUsername: "speedrun_sam",
    flair: "Discussion",
    title: "I finally learned a speedrun route after months of practice",
    excerpt:
      "It's only a modest personal best, but seeing the timer drop after weeks of practice felt incredible.",
    createdAt: "2026-08-13T17:48:00+03:00",
    score: 231,
    commentCount: 39,
  },
  {
    id: 28,
    boardName: "gaming",
    authorUsername: "coop_player",
    flair: "Question",
    title: "Best co-op games for two people who aren't hardcore gamers?",
    excerpt:
      "Looking for something fun to play with a friend that doesn't require perfect reflexes or memorizing complicated systems.",
    createdAt: "2026-08-13T13:48:00+03:00",
    score: 268,
    commentCount: 64,
  },
  {
    id: 29,
    boardName: "gaming",
    authorUsername: "controller_drift",
    flair: "Review",
    title: "How long do your controllers actually last?",
    excerpt:
      "I've had wildly different experiences with controller durability. Curious about everyone's longest-lasting gamepad.",
    createdAt: "2026-08-13T09:48:00+03:00",
    score: 117,
    commentCount: 57,
  },
  {
    id: 30,
    boardName: "gaming",
    authorUsername: "story_mode",
    flair: "Discussion",
    title: "Which game has the best story you've ever played?",
    excerpt:
      "Movies and books get plenty of discussion about storytelling, but games can make you feel directly responsible for the story.",
    createdAt: "2026-08-12T18:48:00+03:00",
    score: 593,
    commentCount: 181,
  },
  {
    id: 31,
    boardName: "books",
    authorUsername: "paperbackdreams",
    flair: "Discussion",
    title: "What's a book you think everyone should read at least once?",
    excerpt:
      "It doesn't have to be your favorite book. I'm more interested in books that you think offer something genuinely valuable.",
    createdAt: "2026-08-14T16:38:00+03:00",
    score: 342,
    commentCount: 98,
  },
  {
    id: 32,
    boardName: "books",
    authorUsername: "nightreader",
    flair: "Question",
    title: "Looking for a mystery novel with a genuinely surprising ending",
    excerpt:
      "I've read most of the obvious recommendations and want something where the reveal actually caught you off guard.",
    createdAt: "2026-08-14T14:38:00+03:00",
    score: 218,
    commentCount: 72,
  },
  {
    id: 33,
    boardName: "books",
    authorUsername: "sci_fi_shelf",
    flair: "Discussion",
    title: "Which sci-fi book predicted the future best?",
    excerpt:
      "Some old science fiction feels remarkably prescient while other predictions aged terribly. What examples stand out?",
    createdAt: "2026-08-14T12:08:00+03:00",
    score: 281,
    commentCount: 81,
  },
  {
    id: 34,
    boardName: "books",
    authorUsername: "annotated",
    flair: "Discussion",
    title: "Do you annotate your books or keep them pristine?",
    excerpt:
      "I've recently started writing notes in the margins and I'm surprised how much more I remember afterward.",
    createdAt: "2026-08-14T08:08:00+03:00",
    score: 164,
    commentCount: 93,
  },
  {
    id: 35,
    boardName: "books",
    authorUsername: "fantasy_reader",
    flair: "Discussion",
    title: "What fantasy world would you actually want to live in?",
    excerpt:
      "Ignoring the protagonist-level plot armor, which fictional world seems like it would be the most enjoyable to inhabit?",
    createdAt: "2026-08-14T02:48:00+03:00",
    score: 427,
    commentCount: 117,
  },
  {
    id: 36,
    boardName: "books",
    authorUsername: "classics_corner",
    flair: "Discussion",
    title: "Which classic surprised you by being genuinely funny?",
    excerpt:
      "I expected another serious old novel and ended up laughing far more than I expected.",
    createdAt: "2026-08-13T19:48:00+03:00",
    score: 139,
    commentCount: 44,
  },
  {
    id: 37,
    boardName: "books",
    authorUsername: "bookstacked",
    flair: "Review",
    title: "My summer reading pile got completely out of control",
    excerpt:
      "I somehow went from planning to read five books to having a stack of twenty sitting beside my bed.",
    createdAt: "2026-08-13T15:48:00+03:00",
    score: 256,
    commentCount: 61,
  },
  {
    id: 38,
    boardName: "books",
    authorUsername: "shortstories",
    flair: "Question",
    title: "Recommend me a short story that will haunt me for days",
    excerpt:
      "Looking for something atmospheric and unsettling rather than outright horror.",
    createdAt: "2026-08-13T10:48:00+03:00",
    score: 188,
    commentCount: 53,
  },
  {
    id: 39,
    boardName: "books",
    authorUsername: "slow_reader",
    flair: "Question",
    title: "How many books do you realistically finish in a month?",
    excerpt:
      "I keep seeing huge yearly reading challenges and wonder what everyone's normal pace actually looks like.",
    createdAt: "2026-08-12T22:48:00+03:00",
    score: 305,
    commentCount: 134,
  },
  {
    id: 40,
    boardName: "books",
    authorUsername: "librarycard",
    flair: "Discussion",
    title: "Do you prefer buying books or using the library?",
    excerpt:
      "I've been trying to use my local library more and it's changed how willing I am to experiment with unfamiliar authors.",
    createdAt: "2026-08-12T16:48:00+03:00",
    score: 231,
    commentCount: 87,
  },
  {
    id: 41,
    boardName: "cooking",
    authorUsername: "pantrychef",
    flair: "Discussion",
    title: "What's the one ingredient that instantly improves your cooking?",
    excerpt:
      "For me it's good-quality olive oil, but I'm curious which ingredients other home cooks swear by.",
    createdAt: "2026-08-14T17:18:00+03:00",
    score: 287,
    commentCount: 76,
  },
  {
    id: 42,
    boardName: "cooking",
    authorUsername: "weeknightcook",
    flair: "Discussion",
    title: "My 20-minute pasta recipe has become a weekly staple",
    excerpt:
      "It's simple, cheap, and requires almost no cleanup. Sharing the basic method for anyone who needs quick dinner ideas.",
    createdAt: "2026-08-14T15:48:00+03:00",
    score: 394,
    commentCount: 68,
  },
  {
    id: 43,
    boardName: "cooking",
    authorUsername: "castironfan",
    flair: "Question",
    title: "What did you cook perfectly only after failing several times?",
    excerpt:
      "Mine was a simple omelet. I somehow managed to make it wrong dozens of times before finally figuring it out.",
    createdAt: "2026-08-14T11:18:00+03:00",
    score: 174,
    commentCount: 59,
  },
  {
    id: 44,
    boardName: "cooking",
    authorUsername: "spice_route",
    flair: "Discussion",
    title: "What's a cooking technique beginners should learn early?",
    excerpt:
      "There are hundreds of techniques, but which one made the biggest difference to your cooking once you learned it?",
    createdAt: "2026-08-14T07:48:00+03:00",
    score: 319,
    commentCount: 82,
  },
  {
    id: 45,
    boardName: "cooking",
    authorUsername: "breadandbutter",
    flair: "Discussion",
    title: "My first sourdough loaf actually worked",
    excerpt:
      "After several dense bricks, I finally got a loaf with decent oven spring and an airy crumb.",
    createdAt: "2026-08-14T01:48:00+03:00",
    score: 261,
    commentCount: 47,
  },
  {
    id: 46,
    boardName: "cooking",
    authorUsername: "sauceboss",
    flair: "Question",
    title: "What's your secret ingredient for tomato sauce?",
    excerpt:
      "Everyone seems to have one little addition they swear makes homemade sauce better.",
    createdAt: "2026-08-13T20:48:00+03:00",
    score: 205,
    commentCount: 91,
  },
  {
    id: 47,
    boardName: "cooking",
    authorUsername: "mealprep_mike",
    flair: "Question",
    title: "What meal prep recipes don't become boring by day three?",
    excerpt:
      "I'm looking for recipes that keep their texture and flavor after several days in the fridge.",
    createdAt: "2026-08-13T14:48:00+03:00",
    score: 348,
    commentCount: 105,
  },
  {
    id: 48,
    boardName: "cooking",
    authorUsername: "knife_skills",
    flair: "Discussion",
    title: "How long did it take you to become comfortable with a chef's knife?",
    excerpt:
      "I can chop reasonably quickly now, but I still feel awkward compared with experienced cooks.",
    createdAt: "2026-08-13T09:48:00+03:00",
    score: 122,
    commentCount: 48,
  },
  {
    id: 49,
    boardName: "cooking",
    authorUsername: "comfortfoodie",
    flair: "Discussion",
    title: "What's your ultimate comfort food?",
    excerpt:
      "The kind of meal you make when you're tired, sick, nostalgic, or just having a terrible day.",
    createdAt: "2026-08-12T21:48:00+03:00",
    score: 463,
    commentCount: 139,
  },
  {
    id: 50,
    boardName: "cooking",
    authorUsername: "restaurantathome",
    flair: "Review",
    title: "I tried recreating my favorite restaurant dish at home",
    excerpt:
      "It took three attempts, but I finally got surprisingly close. The biggest challenge was figuring out the sauce.",
    createdAt: "2026-08-12T13:48:00+03:00",
    score: 183,
    commentCount: 56,
  },
  {
    id: 51,
    boardName: "paranormal",
    authorUsername: "midnightfiles",
    flair: "Discussion",
    title: "Has anyone experienced something they still can't explain?",
    excerpt:
      "Not necessarily a ghost story. I'm interested in experiences where you genuinely couldn't figure out what happened.",
    createdAt: "2026-08-14T16:58:00+03:00",
    score: 387,
    commentCount: 143,
  },
  {
    id: 52,
    boardName: "paranormal",
    authorUsername: "skeptic_at_heart",
    flair: "Discussion",
    title: "What's the most convincing paranormal evidence you've seen?",
    excerpt:
      "I'm skeptical but open-minded. What piece of evidence actually made you stop and reconsider your assumptions?",
    createdAt: "2026-08-14T13:18:00+03:00",
    score: 241,
    commentCount: 87,
  },
  {
    id: 53,
    boardName: "paranormal",
    authorUsername: "old_house",
    flair: "Discussion",
    title: "Something keeps knocking from inside the wall",
    excerpt:
      "It happens mostly at night and always seems to come from the same section of the house. Plumbing and pests haven't explained it yet.",
    createdAt: "2026-08-14T08:18:00+03:00",
    score: 516,
    commentCount: 176,
  },
  {
    id: 54,
    boardName: "paranormal",
    authorUsername: "folklorefan",
    flair: "Discussion",
    title: "What's the strangest local legend from your hometown?",
    excerpt:
      "Every town seems to have at least one strange story that gets passed down through generations.",
    createdAt: "2026-08-14T02:18:00+03:00",
    score: 329,
    commentCount: 94,
  },
  {
    id: 55,
    boardName: "paranormal",
    authorUsername: "nightcamera",
    flair: "Review",
    title: "I reviewed a month of footage from my supposedly haunted house",
    excerpt:
      "Most of it was completely mundane, but there were a few recordings that I still can't confidently explain.",
    createdAt: "2026-08-13T21:18:00+03:00",
    score: 274,
    commentCount: 73,
  },
  {
    id: 56,
    boardName: "paranormal",
    authorUsername: "dreamwalker",
    flair: "Question",
    title: "Do recurring dreams ever feel connected to real places?",
    excerpt:
      "I've dreamed about the same unfamiliar building for years despite never knowingly seeing it in real life.",
    createdAt: "2026-08-13T15:18:00+03:00",
    score: 198,
    commentCount: 62,
  },
  {
    id: 57,
    boardName: "paranormal",
    authorUsername: "haunted_history",
    flair: "Discussion",
    title: "What supposedly haunted historical site would you visit?",
    excerpt:
      "There are hundreds of famous haunted locations. Which one would you actually want to explore?",
    createdAt: "2026-08-13T10:18:00+03:00",
    score: 351,
    commentCount: 79,
  },
  {
    id: 58,
    boardName: "paranormal",
    authorUsername: "rationalghost",
    flair: "Discussion",
    title: "What's a famous paranormal case with a mundane explanation?",
    excerpt:
      "I love paranormal stories, but debunking them can be just as fascinating as the original claims.",
    createdAt: "2026-08-12T22:18:00+03:00",
    score: 288,
    commentCount: 91,
  },
  {
    id: 59,
    boardName: "paranormal",
    authorUsername: "strange_signal",
    flair: "Question",
    title: "Have you ever heard a sound with no obvious source?",
    excerpt:
      "I'm fascinated by unexplained sounds, especially reports of low-frequency noises and strange voices.",
    createdAt: "2026-08-12T17:18:00+03:00",
    score: 167,
    commentCount: 51,
  },
  {
    id: 60,
    boardName: "paranormal",
    authorUsername: "after_dark",
    flair: "Discussion",
    title: "Why do so many paranormal experiences happen at night?",
    excerpt:
      "There are psychological explanations, environmental factors, and cultural reasons, but I'm curious what everyone thinks.",
    createdAt: "2026-08-12T11:18:00+03:00",
    score: 412,
    commentCount: 128,
  },
  {
    id: 61,
    boardName: "coding",
    authorUsername: "frontend_fred",
    flair: "Question",
    title: "What's your favorite way to structure a React project?",
    excerpt:
      "I've tried feature-based and layer-based structures and keep changing my mind. Curious what patterns have worked long term.",
    createdAt: "2026-08-14T17:28:00+03:00",
    score: 143,
    commentCount: 51,
  },
  {
    id: 62,
    boardName: "coding",
    authorUsername: "backend_builder",
    flair: "Discussion",
    title: "When is a monolith actually the right choice?",
    excerpt:
      "Microservices get recommended constantly, but every project I've seen starts much simpler. Where do you draw the line?",
    createdAt: "2026-08-14T14:28:00+03:00",
    score: 387,
    commentCount: 126,
  },
  {
    id: 63,
    boardName: "coding",
    authorUsername: "typescript_tom",
    flair: "Discussion",
    title: "What's the most useful TypeScript feature you've discovered recently?",
    excerpt:
      "There are so many advanced type features that it's easy to miss useful patterns hiding in the documentation.",
    createdAt: "2026-08-14T11:28:00+03:00",
    score: 211,
    commentCount: 64,
  },
  {
    id: 64,
    boardName: "coding",
    authorUsername: "git_blame",
    flair: "Discussion",
    title: "What's your most useful Git alias?",
    excerpt:
      "I'm cleaning up my shell configuration and looking for small Git aliases that genuinely save time.",
    createdAt: "2026-08-14T07:28:00+03:00",
    score: 169,
    commentCount: 73,
  },
  {
    id: 65,
    boardName: "coding",
    authorUsername: "debugging_dan",
    flair: "Discussion",
    title: "What's the dumbest bug you've ever spent hours debugging?",
    excerpt:
      "I spent half a day debugging an API only to discover I had misspelled one environment variable.",
    createdAt: "2026-08-14T02:28:00+03:00",
    score: 624,
    commentCount: 182,
  },
  {
    id: 66,
    boardName: "coding",
    authorUsername: "rustacean",
    flair: "Discussion",
    title: "I finally understand why Rust's borrow checker is useful",
    excerpt:
      "It took a while, but I've reached the point where compiler errors are starting to feel like helpful design feedback.",
    createdAt: "2026-08-13T19:28:00+03:00",
    score: 298,
    commentCount: 82,
  },
  {
    id: 67,
    boardName: "coding",
    authorUsername: "junior_dev",
    flair: "Question",
    title: "What should a junior developer focus on beyond coding?",
    excerpt:
      "I'm comfortable with the fundamentals but want to improve the skills that actually matter on a professional development team.",
    createdAt: "2026-08-13T14:28:00+03:00",
    score: 341,
    commentCount: 107,
  },
  {
    id: 68,
    boardName: "coding",
    authorUsername: "testing_time",
    flair: "Question",
    title: "How much test coverage is enough?",
    excerpt:
      "I've worked on projects obsessed with coverage percentages and others with almost no tests. What's a sensible middle ground?",
    createdAt: "2026-08-13T09:28:00+03:00",
    score: 226,
    commentCount: 88,
  },
  {
    id: 69,
    boardName: "coding",
    authorUsername: "sideprojecter",
    flair: "Review",
    title: "I built a tiny app just to solve an annoying problem",
    excerpt:
      "It's nothing revolutionary, but building something small from idea to deployment taught me more than another tutorial would have.",
    createdAt: "2026-08-12T20:28:00+03:00",
    score: 454,
    commentCount: 69,
  },
  {
    id: 70,
    boardName: "coding",
    authorUsername: "algorithm_owl",
    flair: "Discussion",
    title: "Do developers still need to study algorithms?",
    excerpt:
      "With modern frameworks and AI coding tools everywhere, I'm curious how much traditional algorithm knowledge people actually use.",
    createdAt: "2026-08-12T12:28:00+03:00",
    score: 312,
    commentCount: 137,
  },
  {
    id: 71,
    boardName: "lithuania",
    authorUsername: "vilniuswalker",
    flair: "Discussion",
    title: "What's your favorite place to walk in Vilnius?",
    excerpt:
      "Looking for new walking routes around the city, especially quieter areas that aren't the usual tourist destinations.",
    createdAt: "2026-08-14T17:38:00+03:00",
    score: 186,
    commentCount: 54,
  },
  {
    id: 72,
    boardName: "lithuania",
    authorUsername: "cepelinai_enthusiast",
    flair: "Question",
    title: "Where can I find the best cepelinai?",
    excerpt:
      "I'm trying to settle a very important question: which restaurant serves the best traditional cepelinai?",
    createdAt: "2026-08-14T15:38:00+03:00",
    score: 273,
    commentCount: 83,
  },
  {
    id: 73,
    boardName: "lithuania",
    authorUsername: "kaunas_local",
    flair: "Discussion",
    title: "Kaunas residents: what's changed the most in the last few years?",
    excerpt:
      "I've visited recently and noticed quite a few changes. What do locals think has improved or gotten worse?",
    createdAt: "2026-08-14T12:38:00+03:00",
    score: 147,
    commentCount: 61,
  },
  {
    id: 74,
    boardName: "lithuania",
    authorUsername: "forest_trails",
    flair: "Question",
    title: "Best places in Lithuania for a quiet weekend getaway?",
    excerpt:
      "Looking for somewhere peaceful with forests, lakes, or interesting small towns that's easy to reach without going abroad.",
    createdAt: "2026-08-14T09:38:00+03:00",
    score: 229,
    commentCount: 47,
  },
  {
    id: 75,
    boardName: "lithuania",
    authorUsername: "old_vilnius",
    flair: "Discussion",
    title: "What's your favorite piece of Lithuanian history?",
    excerpt:
      "There are so many fascinating chapters in the country's history that don't get much attention outside Lithuania.",
    createdAt: "2026-08-14T04:38:00+03:00",
    score: 316,
    commentCount: 92,
  },
  {
    id: 76,
    boardName: "lithuania",
    authorUsername: "lithuanian_coder",
    flair: "Discussion",
    title: "How is Lithuania's tech scene compared with other European hubs?",
    excerpt:
      "For people working in Lithuanian tech, how do you think the local ecosystem compares with larger European markets?",
    createdAt: "2026-08-13T22:38:00+03:00",
    score: 201,
    commentCount: 68,
  },
  {
    id: 77,
    boardName: "lithuania",
    authorUsername: "summer_in_lt",
    flair: "Discussion",
    title: "What do you always do during a Lithuanian summer?",
    excerpt:
      "Every country has its own summer traditions. What activities make it feel like summer in Lithuania for you?",
    createdAt: "2026-08-13T17:38:00+03:00",
    score: 358,
    commentCount: 79,
  },
  {
    id: 78,
    boardName: "lithuania",
    authorUsername: "languagelearner",
    flair: "Discussion",
    title: "What's your favorite Lithuanian word or expression?",
    excerpt:
      "I'm collecting interesting words and expressions that either sound beautiful, funny, or have no satisfying direct translation.",
    createdAt: "2026-08-13T11:38:00+03:00",
    score: 287,
    commentCount: 103,
  },
  {
    id: 79,
    boardName: "lithuania",
    authorUsername: "publictransport",
    flair: "Question",
    title: "How good is public transport outside Vilnius?",
    excerpt:
      "I'm curious how easy it is to get around smaller Lithuanian cities and towns without owning a car.",
    createdAt: "2026-08-12T23:38:00+03:00",
    score: 164,
    commentCount: 57,
  },
  {
    id: 80,
    boardName: "lithuania",
    authorUsername: "baltic_reader",
    flair: "Discussion",
    title: "What Lithuanian books, films, or music should everyone know?",
    excerpt:
      "Looking for recommendations that give a good sense of Lithuanian culture beyond the most obvious international examples.",
    createdAt: "2026-08-12T15:38:00+03:00",
    score: 391,
    commentCount: 85,
  },
];

export const boardRules: Record<string, string[]> = {
  technology: [
    "Be respectful and civil to other members.",
    "Stay on topic — posts must relate to technology.",
    "No spam, self-promotion, or affiliate links.",
    "Cite sources for factual claims.",
    "Mark NSFW content appropriately.",
    "No duplicate posts — search before submitting.",
    "Rumors and leaks must be labeled as unconfirmed.",
    "No piracy, cracked software, or license key sharing.",
    "Product reviews should disclose any affiliation with the maker.",
    "Political posts are allowed only if directly tech-policy related.",
  ],
  science: [
    "Be respectful and civil to other members.",
    "Stay on topic — posts must relate to science.",
    "Back claims with credible, linkable sources.",
    "No pseudoscience presented as established fact.",
    "Clearly label speculation or personal opinion.",
    "Peer-reviewed sources are preferred over press releases.",
    "No medical advice — general discussion only.",
    "Preprints must be marked as not yet peer-reviewed.",
  ],
  gaming: [
    "Be respectful and civil to other members.",
    "Use spoiler tags for releases under 30 days old.",
    "No piracy links or cheat distribution.",
    "No spam, self-promotion, or affiliate links.",
    "Console wars and flame bait will be removed.",
    "Trade and sale posts belong in the weekly megathread.",
    "Cheating accusations require evidence.",
    "Fan art is welcome but must be your own work.",
    "No leaked or NDA-protected content.",
    "Livestream self-promotion limited to once per week.",
    "Mod tools and cracked clients are not allowed.",
    "Keep review-bombing campaigns out of the board.",
  ],
  books: [
    "Be respectful and civil to other members.",
    "Use spoiler tags when discussing plot details.",
    "No spam, self-promotion, or affiliate links.",
    "Credit the author and title when sharing excerpts.",
  ],
  cooking: [
    "Be respectful and civil to other members.",
    "Include ingredients and rough steps when sharing a recipe.",
    "No spam, self-promotion, or affiliate links.",
    "Credit original recipe sources when known.",
    "Food safety claims should be accurate — no dangerous advice.",
    "Diet-shaming or judging others' food choices isn't allowed.",
  ],
  paranormal: [
    "Be respectful and civil to other members.",
    "Skepticism is welcome, but keep it constructive.",
    "No spam, self-promotion, or affiliate links.",
    "Clearly label staged, fictional, or AI-generated content.",
    "Personal experience posts should note date and location.",
    "No harassment of posters who share sightings or experiences.",
    "Debunking is fine — mockery isn't.",
  ],
  coding: [
    "Be respectful and civil to other members.",
    "Use code blocks when sharing code.",
    "No spam, self-promotion, or affiliate links.",
    "Search before posting — avoid duplicate questions.",
    "Include language and error messages when asking for help.",
    "No unsolicited job or recruiting posts.",
    "Homework-style questions need an attempted solution shown.",
    "Don't paste API keys, tokens, or credentials — even in screenshots.",
    "AI-generated answers should be marked as such.",
  ],
  lithuania: [
    "Be respectful and civil to other members.",
    "Posts in Lithuanian or English are both welcome.",
    "Cite sources for news claims.",
  ],
}
