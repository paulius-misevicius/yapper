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

export const users: UserProfile[] = [
  {
    id: 1,
    username: "paulius",
    bio: "learning to build things",
    profilePictureUrl: "",
    joinedAt: "2026-09-01T09:30:00Z",
    postCount: 5,
    commentCount: 8,
    karma: 20,
    joinedBoardNames: ["technology", "coding", "lithuania"]
  },
  {
    id: 6,
    username: "privacyfirst99",
    bio: "Full-stack dev tinkering with side projects on evenings and weekends. Mostly lurking in b/technology and b/coding, occasionally surfacing to talk about the Lithuanian tech scene in b/lithuania.",
    profilePictureUrl: "",
    joinedAt: "2026-05-20T09:00:00Z",
    postCount: 14,
    commentCount: 89,
    karma: 1240,
    joinedBoardNames: ["technology"],
  },
  {
    id: 7,
    username: "netrunner_x",
    bio: "",
    profilePictureUrl: "",
    joinedAt: "2026-05-25T09:00:00Z",
    postCount: 2,
    commentCount: 46,
    karma: 310,
    joinedBoardNames: ["technology", "gaming"],
  },
  {
    id: 8,
    username: "quietwatcher",
    bio: "lurker turned occasional commenter",
    profilePictureUrl: "",
    joinedAt: "2026-06-01T09:00:00Z",
    postCount: 0,
    commentCount: 22,
    karma: 118,
    joinedBoardNames: ["technology"],
  },
  {
    id: 9,
    username: "vpn_skeptic",
    bio: "assume every 'no-log' claim is marketing until audited",
    profilePictureUrl: "",
    joinedAt: "2026-06-03T09:00:00Z",
    postCount: 4,
    commentCount: 63,
    karma: 402,
    joinedBoardNames: ["technology", "science"],
  },
  {
    id: 10,
    username: "dailydriver42",
    bio: "practical over paranoid",
    profilePictureUrl: "",
    joinedAt: "2026-05-18T09:00:00Z",
    postCount: 8,
    commentCount: 71,
    karma: 355,
    joinedBoardNames: ["technology", "coding"],
  },
  {
    id: 11,
    username: "threatmodel_tia",
    bio: "security researcher, opinions my own",
    profilePictureUrl: "",
    joinedAt: "2026-05-15T09:00:00Z",
    postCount: 19,
    commentCount: 134,
    karma: 2108,
    joinedBoardNames: ["technology", "science", "coding"],
  },
  {
    id: 12,
    username: "dns_over_dave",
    bio: "",
    profilePictureUrl: "",
    joinedAt: "2026-06-10T09:00:00Z",
    postCount: 1,
    commentCount: 17,
    karma: 89,
    joinedBoardNames: ["technology"],
  },
  {
    id: 13,
    username: "sandboxed_sid",
    bio: "new to self-hosting, still learning",
    profilePictureUrl: "",
    joinedAt: "2026-07-01T09:00:00Z",
    postCount: 0,
    commentCount: 6,
    karma: 24,
    joinedBoardNames: ["technology"],
  },
  {
    id: 14,
    username: "browser_fingerprint_fan",
    bio: "fingerprinting > cookies, fight me",
    profilePictureUrl: "",
    joinedAt: "2026-05-22T09:00:00Z",
    postCount: 6,
    commentCount: 98,
    karma: 876,
    joinedBoardNames: ["technology"],
  },
  {
    id: 15,
    username: "lurkmode_lena",
    bio: "",
    profilePictureUrl: "",
    joinedAt: "2026-06-20T09:00:00Z",
    postCount: 0,
    commentCount: 9,
    karma: 41,
    joinedBoardNames: ["technology", "books"],
  },
]
