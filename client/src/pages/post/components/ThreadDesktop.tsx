import type { CommentThreadProps } from "./CommentThread"
import type { BoardContext } from "../../../components/BoardLayout"
import ProfilePicture from "../../../components/ProfilePicture"
import { Plus, Minus, Triangle, MessageSquare } from "lucide-react"
import { getTimeAgo } from "../../../utils"
import { useOutletContext } from "react-router"

interface ThreadDesktopProps extends CommentThreadProps {
    children: React.ReactNode
    isThreadOpen: boolean
    setIsThreadOpen: React.Dispatch<React.SetStateAction<boolean>>
    profilePictureUrl: string | undefined
}

export default function ThreadDesktop({
    children, 
    isThreadOpen, 
    setIsThreadOpen, 
    depth, 
    profilePictureUrl, 
    postAuthor,
    authorUsername, 
    createdAt, 
    id, 
    body, 
    score, 
    replies, 
    parentCommentId,
    setReplyBoxId
}: ThreadDesktopProps) {

    const { boardInfo } = useOutletContext<BoardContext>()

    return (
        <details 
            open={isThreadOpen} 
            onToggle={event => setIsThreadOpen(event.currentTarget.open)}
            className={`flex min-w-0 flex-col ${depth && depth > 0 ? "mt-4" : ""}`}
        >
            <summary 
                className="grid min-w-0 items-center gap-3 grid-cols-[24px_minmax(0,1fr)] xs:grid-cols-[32px_minmax(0,1fr)]">
                {isThreadOpen
                    ?   
                        <ProfilePicture size="w-full aspect-square" userSrc={profilePictureUrl} />
                    :   
                        <button 
                            onClick={event => {
                                event.preventDefault()
                                event.stopPropagation()
                                setIsThreadOpen(true)
                            }}
                            aria-label={`${isThreadOpen ? "Close" : "Open"} thread created by ${authorUsername} ${getTimeAgo(createdAt)}`}
                            className="relative size-4 text-(--text-secondary) justify-self-center border-2 border-(--border-strong) rounded-full flex justify-center items-center"
                        >
                            <Plus className="-translate-1/2 top-1/2 left-1/2 size-3/4 stroke-[2.75] absolute"/>
                        </button>
                }
                <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-2">
                        <p className="font-medium">
                            {authorUsername}
                        </p>
                        {authorUsername === postAuthor &&
                            <span className={`text-xs tracking-wide px-1.5 rounded-xs font-medium ${boardInfo.colorClass}`}>
                                OP
                            </span>
                        }
                    </div>
                    <p className="text-xs! text-(--text-muted)!">
                        {getTimeAgo(createdAt)}
                    </p>
                </div>
            </summary>
            <div className="grid min-w-0 items-center grid-cols-[24px_1fr] xs:grid-cols-[32px_1fr] gap-x-3">
                {replies.length > 0
                    ?   <div className="border-l border-(--border) h-full justify-self-center"/>
                    :   <div />
                }
                <p className="mb-2 text-wrap">{body}</p>
                {replies.length > 0
                    ?
                        <button 
                            onClick={event => {
                                event.preventDefault()
                                event.stopPropagation()
                                setIsThreadOpen(false)
                            }}
                            aria-label={`${isThreadOpen ? "Close" : "Open"} thread created by ${authorUsername} ${getTimeAgo(createdAt)}`}
                            className="relative size-4 text-(--text-secondary) justify-self-center border-2 border-(--border-strong) rounded-full flex justify-center items-center"
                        >
                            <Minus className="-translate-1/2 top-1/2 left-1/2 size-3/4 stroke-[2.75] absolute"/>
                        </button>
                    :   
                        <div />
                }
                <div className="flex items-center gap-4">
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
                        onClick={() => setReplyBoxId(id)}
                        aria-label={`Reply to comment id ${parentCommentId}`}
                        className="flex items-center text-(--text-muted) text-xs gap-2"
                    >
                        <MessageSquare className="size-3.5"/>
                        Reply
                    </button>
                </div>
                <div />
                <div className="min-w-0">
                    {children}
                </div>
            </div>
        </details>
    )
}