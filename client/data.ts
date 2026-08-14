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
    name: "b/technology",
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
    name: "b/science",
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
    name: "b/gaming",
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
    name: "b/books",
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
    name: "b/cooking",
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
    name: "b/paranormal",
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
    name: "b/coding",
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
    name: "b/lithuania",
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
    boardName: "b/science",
    title: "New findings on deep-sea bioluminescence discussed",
    timeAgo: "8d ago",
    upvotes: 14,
    commentCount: 38,
    dotColorClass: "bg-blue-700",
  },
  {
    id: 3,
    boardName: "b/coding",
    title: "Open source tools I actually use every day. (no, this isn't an ad)",
    timeAgo: "1d ago",
    upvotes: 31,
    commentCount: 12,
    dotColorClass: "bg-green-700",
  },
  {
    id: 4,
    boardName: "b/gaming",
    title: "Haven't been outside in 5 days. Is anyone else suffering from a crippling gaming addiction?",
    timeAgo: "1d ago",
    upvotes: 31,
    commentCount: 12,
    dotColorClass: "bg-purple-700",
  },
  {
    id: 5,
    boardName: "b/books",
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
    joinedBoardNames: ["b/technology", "b/coding", "b/lithuania"]
}

export type Flair = "Discussion" | "News" | "PSA" | "Review" | "Question"

export interface BoardPost {
  id: number
  boardName: string
  authorUsername: string
  flair: Flair
  title: string
  excerpt: string
  timeAgo: string
  score: number
  commentCount: number
}
export const posts: BoardPost[] = [
  {
    id: 1,
    boardName: "b/technology",
    authorUsername: "devjordan_",
    flair: "Discussion",
    title: "What's everyone's go-to laptop for software development in 2024?",
    excerpt:
      "I've been using a MacBook Pro M3 for the past few months and honestly the battery life is insane. Curious what setups other devs here are running — especially anyone on Linux...",
    timeAgo: "1h ago",
    score: 87,
    commentCount: 34,
  },
  {
    id: 2,
    boardName: "b/technology",
    authorUsername: "llm_watcher",
    flair: "News",
    title: "Google just open-sourced their new on-device AI model — runs on 4GB RAM",
    excerpt:
      "Dropped quietly on GitHub this morning. It's a 3B parameter model optimized for edge deployment. Early benchmarks are surprisingly competitive with cloud-based alternative...",
    timeAgo: "3h ago",
    score: 214,
    commentCount: 67,
  },
  {
    id: 3,
    boardName: "b/technology",
    authorUsername: "privacyfirst99",
    flair: "PSA",
    title: "PSA: the new Chrome update silently re-enables third-party cookies for some users",
    excerpt:
      "Checked my settings after the update and noticed the toggle had been flipped back. Seems like a staged rollout tied to their Privacy Sandbox experiment. Make sure to...",
    timeAgo: "5h ago",
    score: 531,
    commentCount: 112,
  },
  {
    id: 4,
    boardName: "b/technology",
    authorUsername: "cables_and_chaos",
    flair: "Discussion",
    title: "Anyone else notice USB-C cable quality has gotten dramatically worse?",
    excerpt:
      "Bought three cables from three different brands over the past month and two of them are already causing charging issues. Is this a supply chain thing or just the race to the botto...",
    timeAgo: "7h ago",
    score: 43,
    commentCount: 29,
  },
  {
    id: 5,
    boardName: "b/technology",
    authorUsername: "repairability_nerd",
    flair: "Review",
    title: "Framework 16 after 6 months: a real-world review from a daily driver",
    excerpt:
      "Short version: I love the modularity, the repairability score is unmatched, and the keyboard is better than I expected. The GPU module gets warm but throttles gracefully....",
    timeAgo: "12h ago",
    score: 168,
    commentCount: 55,
  },
]

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
