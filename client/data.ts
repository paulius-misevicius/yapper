export interface Board {
    id: number
    name: string
    description: string
    memberCount: number
    postCount: number
    joined: boolean
    colorClass: string
    dotColorClass: string
}

export interface RecentPost {
    id: number
    boardName: string
    title: string
    timeAgo: string
    upvotes: number
    commentCount: number
    dotColorClass: string
}

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

export const boards: Board[] = [
  {
    id: 1,
    name: "b/technology",
    description: "Hardware, software, gadgets, and the future of computing. Join to discuss the latest in tech.",
    memberCount: 241,
    postCount: 843,
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
    joined: true,
    colorClass: "bg-orange-100 text-orange-700",
    dotColorClass: "bg-orange-700"
  },
]
 
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

export const currentUser: UserProfile = {
    id: 1,
    username: "paulius",
    bio: "learning to build things",
    profilePictureUrl: "string",
    joinedAt: "2026-06-01T09:30:00Z",
    postCount: 5,
    commentCount: 8,
    karma: 62,
    joinedBoardNames: ["b/technology", "b/coding", "b/lithuania"]
}