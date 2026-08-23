export type Filter = "today" | "this week" | "this month" | "this year" | "all time"
export type Sort = "new" | "top"

export interface BoardProps {
    id: number
    name: string
    description: string
    createdAt: string
    memberCount: number
    postCount: number
    color: string
    rules?: string[]
}
export interface RecentPostProps {
    id: number
    color: string
    boardName: string
    createdAt: string
    title: string
    score: number
    commentCount: number
}
export interface PostProps {
  id: number
  authorUsername: string
  flair: string
  title: string
  body: string
  createdAt: string
  score: number
  commentCount: number
}
export interface CommentProps {
    id: number
    authorUsername: string
    parentCommentId: number | null
    body: string
    createdAt: string
    score: number
}
export interface UserProps {
    id: number
    username: string
    bio: string
    profilePictureUrl: string
    joinedAt: string
    postCount: number
    commentCount?: number
    karma?: number
    joinedBoardNames?: string[]
}