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