import { Link } from "react-router"
import { Triangle, MessageSquare } from "lucide-react"
import type { RecentPostProps } from "../../../utils/types"
import { getTimeAgo } from "../../../utils/utils"

export default function RecentPost({id, color, boardName, createdAt, title, score, commentCount}: RecentPostProps) {
    return (
         <div 
            key={id}
            className="flex flex-col gap-2 border-b border-(--border) last:border-0 pb-5"
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div 
                        className="rounded-full size-2.25"
                        style={{backgroundColor: `rgba(${color}, 1)`}}
                    />
                    <Link 
                        to={`b/${boardName}`}
                        className="text-sm text-(--text-muted)! font-medium! hover:text-(--text-secondary)!"
                    >
                        b/{boardName}
                    </Link>
                </div>
                <p className="text-(--text-muted)! text-xs!">
                    {getTimeAgo(createdAt)}
                </p>
            </div>
            <Link
                to={`b/${boardName}/${id}`}
                title={title}
                className="active:text-(--accent-text) line-clamp-2 text-sm text-(--text-secondary) font-medium lg:hover:text-(--accent-text)"
            >
                {title}
            </Link>
            <div className="flex gap-4">
                <p className="flex items-center gap-1 text-(--text-muted)! text-xs!">
                    <Triangle className="size-3"/>
                    {score} {score >= 0 ? "upvotes" : "downvotes"}
                </p>
                <p className="flex items-center gap-1.5 text-(--text-muted)! text-xs!">
                    <MessageSquare className="size-3"/>
                    {commentCount} comments
                </p>
            </div>
        </div>
    )
}