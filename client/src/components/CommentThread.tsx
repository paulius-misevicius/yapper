import type { CommentWithReplies } from "../pages/Post"
import { getTimeAgo } from "../utils"
import { Triangle, MessageSquare } from "lucide-react"
import ProfilePicture from "./ProfilePicture"
import { users } from "../../data/user"

interface CommentThreadProps extends Omit<CommentWithReplies, | "postId" | "parentCommentId"> {
    depth?: number
}

export default function CommentThread({ authorUsername, createdAt, score, body, replies, depth = 0 }: CommentThreadProps) {
    const user = users.find(item => item.username === authorUsername)

    return (
        <div className={`flex gap-3 ${depth > 0 ? "mt-4" : ""}`}>
            <div className="flex flex-col items-center">
                <ProfilePicture size="size-8" userSrc={user?.profilePictureUrl} />
                {depth > 0 && <div className="border-l border-(--border) h-full"/>}
            </div>
            <div>
                <div className="flex gap-3 items-center mb-1">
                    <p className="font-medium">
                        {authorUsername}
                    </p>
                    <p className="text-xs! text-(--text-muted)!">
                        {getTimeAgo(createdAt)}
                    </p>
                </div>
                <p>{body}</p>
                <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => console.log("Downvoted")}
                            aria-label={`Upvote comment`}
                            className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                        >
                            <Triangle className="size-3.5"/>
                        </button>
                        <p className="text-xs! text-(--text-muted)!">
                            {score}
                        </p>
                        <button
                            onClick={() => console.log("Downvoted")}
                            aria-label={`Downvote comment`}
                            className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                        >
                            <Triangle className="size-3.5 triangle-down"/>
                        </button>
                    </div>
                    <button 
                        className="flex items-center text-(--text-muted) text-xs gap-2"
                    >
                        <MessageSquare className="size-3.5"/>
                        Reply
                    </button>
                </div>
                {replies.length > 0 &&
                    replies.map(item =>
                        <CommentThread
                            key={item.id}
                            id={item.id}
                            authorUsername={item.authorUsername}
                            createdAt={item.createdAt}
                            score={item.score}
                            body={item.body}
                            replies={item.replies}
                            depth={depth + 1}
                        />
                )}
            </div>
        </div>
    )
}