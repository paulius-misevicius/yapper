import type { CommentThreadProps } from "./CommentThread"
import type { BoardContext } from "../../../components/BoardLayout"
import { MessageSquare, Triangle } from "lucide-react"
import { useOutletContext } from "react-router"
import { getTimeAgo } from "../../../utils"
import ProfilePicture from "../../../components/ProfilePicture"

interface ThreadMobileProps extends CommentThreadProps {
    children: React.ReactNode
    isThreadOpen: boolean
    setIsThreadOpen: React.Dispatch<React.SetStateAction<boolean>>
    profilePictureUrl: string | undefined
}

export default function ThreadMobile({
    children,
    isThreadOpen, 
    setIsThreadOpen, 
    depth, 
    profilePictureUrl, 
    postAuthor,
    authorUsername, 
    createdAt, 
    body, 
    id,
    score,
    setReplyBoxId
}: ThreadMobileProps) {

    const { boardInfo } = useOutletContext<BoardContext>()

    return (
        <div className={`flex my-2`}>
            { depth && depth > 0 
                ?   <div className="border-l border-(--border-strong) pr-4"/>
                :   null
            }
            <details
                open={isThreadOpen}
                onToggle={event => setIsThreadOpen(event.currentTarget.open)}
                className="flex min-w-0 flex-col grow"
            >
                <summary
                    className="flex items-center gap-3"
                >
                    <ProfilePicture size="size-6.5 aspect-square" userSrc={profilePictureUrl} />
                    <div className="flex items-center gap-2">
                        <p className="font-medium">
                            {authorUsername}
                        </p>
                        {authorUsername === postAuthor &&
                            <span className={`text-[10px] tracking-wide px-1.5 rounded-xs font-medium ${boardInfo.colorClass}`}>
                                OP
                            </span>
                        }
                    </div>
                    <p className="text-xs! text-(--text-muted)!">
                        {getTimeAgo(createdAt)}
                    </p>
                </summary>
                <p className="mt-1 mb-2 text-wrap">{body}</p>
                <div className="flex items-center gap-4 justify-end">
                    <button
                        onClick={() => setReplyBoxId(id)}
                        aria-label={`Reply to ${authorUsername}`}
                        className="flex items-center text-(--text-muted) active:text-(--text-secondary)! lg:hover:text-(--text-secondary)! text-xs gap-2"
                    >
                        <MessageSquare className="size-3.5"/>
                        Reply
                    </button>
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
                </div>
                <div>
                    {children}
                </div>
            </details>
        </div>
    )
}