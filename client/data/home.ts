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