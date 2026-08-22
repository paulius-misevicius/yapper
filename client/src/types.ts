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