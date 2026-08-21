export interface BoardPreviewProps {
    id: number
    name: string
    description: string
    createdAt?: string
    memberCount: number
    postCount: number
    color: string
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