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
    flair: string
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
    body: string
    createdAt: string
    score: number
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