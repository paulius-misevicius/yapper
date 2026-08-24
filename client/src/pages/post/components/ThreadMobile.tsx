import type { CommentThreadProps } from "./CommentThread"
import type { BoardContext } from "../../../components/BoardLayout"
import { MessageSquare, Triangle } from "lucide-react"
import { useOutletContext, Link } from "react-router"
import { getTimeAgo, useGlobalContext } from "../../../utils/utils"
import ProfilePicture from "../../../components/ProfilePicture"
import { useVote } from "../../../utils/useVote"

interface ThreadMobileProps extends CommentThreadProps {
    children: React.ReactNode
    isThreadOpen: boolean
    setIsThreadOpen: React.Dispatch<React.SetStateAction<boolean>>
    profilePictureUrl: string
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
    const { isLoggedIn, setAuthType } = useGlobalContext()
    const { finalScore, userVote, vote } = useVote(id, "comment", score)

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
                    <Link
                        to={`/u/${authorUsername}`}
                        className="rounded-full"
                    >
                        <ProfilePicture size="size-6.5 aspect-square" userSrc={profilePictureUrl} />
                    </Link>
                    <div className="flex items-center gap-2">
                        <p className="font-medium">
                            {authorUsername}
                        </p>
                        {authorUsername === postAuthor &&
                            <span 
                                className="text-[10px] tracking-wide px-1.5 rounded-xs font-medium"
                                style={{
                                    backgroundColor: `rgba(${boardInfo.color}, 0.1)`,
                                    color: `rgba(${boardInfo.color}, 1)`
                                }}
                            >
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
                        onClick={isLoggedIn 
                            ?   () => setReplyBoxId(id)
                            :   () => setAuthType("sign-up")
                        }
                        aria-label={`Reply to ${authorUsername}`}
                        className="flex items-center text-(--text-muted) active:text-(--text-secondary)! lg:hover:text-(--text-secondary)! text-xs gap-2"
                    >
                        <MessageSquare className="size-3.5"/>
                        Reply
                    </button>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={isLoggedIn 
                                ?   () => vote(1)
                                :   () => setAuthType("sign-up")
                            }
                            aria-label={`Upvote comment`}
                        >
                            <Triangle 
                                className={`
                                    ${userVote === 1 ? "fill-(--text-secondary) text-(--text-secondary)!" : ""} 
                                    text-(--text-muted) active:text-(--text-secondary) lg:hover:text-(--text-secondary) size-3.5`
                                }
                            />
                        </button>
                        <p className="text-xs! text-(--text-muted)!">
                            {finalScore}
                        </p>
                        <button
                            onClick={isLoggedIn 
                                ?   () => vote(-1)
                                :   () => setAuthType("sign-up")
                            }
                            aria-label={`Downvote comment`}
                        >
                            <Triangle 
                                className={`
                                    ${userVote === -1 ? "fill-(--text-secondary) text-(--text-secondary)!" : ""} 
                                    text-(--text-muted) active:text-(--text-secondary) lg:hover:text-(--text-secondary) size-3.5 triangle-down`
                                }
                            />
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