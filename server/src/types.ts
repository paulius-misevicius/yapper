import "express-session";

declare module "express-session" {
  interface SessionData {
    userId?: number
  }
}

export interface Board {
    id: number
    name: string
    description: string
    memberCount: number
    createdAt: string
    postCount: number
    color: string
}
export interface BoardRule {
    rule: string
}
export interface Post {
    id: number
    color?: string
    flair?: string
    body: string
    boardName?: string
    createdAt: string
    title: string
    score: number
    commentCount: number
}
export interface Comment {
    id: number
    authorUsername: string
    parentCommentId: number
    profilePictureUrl: string
    body: string
    createdAt: string
    score: number
}
export interface User {
    id: number
    username: string
    bio: string
    profilePictureUrl: string
    joinedAt: string
    email: string
    theme: "light" | "dark"
    postCount: number
    commentCount: number
    karma: number
    savedPostIds?: number
    joinedBoardNames?: string[]
    joinedBoardCount?: number
}
export interface Username {
    username: string
}
export interface Email {
    email: string
}
export interface Id {
    id: number
}
export interface VoteValue {
    id: number
}
export interface UserLogin {
    id: number
    passwordHash: string
}
export interface Vote {
    id: number
    userId: number
    postId?: number
    commentId?: number
    value: number
}
export interface SavedPost {
    id: number
    user_id: number
    post_id: number
}
export interface BoardMembership {
    id: number
    user_id: number
    board_id: number
    joined_at: string
}