import { useGlobalContext, getTimeAgo } from "../../../utils"
import { Triangle, Bookmark, MessageSquare } from "lucide-react"
import { Link } from "react-router"
import { useState } from "react"

import type { PostProps } from "../../../types"

interface PostCardProps extends PostProps {
    color?: string
    boardName?: string
    noFlair?: boolean
    useBoardName?: boolean
}

export default function PostCard({
    id, 
    title, 
    score, 
    body, 
    authorUsername, 
    createdAt, 
    commentCount, 
    flair, 
    boardName,
    color,
    noFlair,
    useBoardName
}: PostCardProps) {

    const { isLoggedIn, setAuthType, currentUser } = useGlobalContext()
    const [isSaved, setIsSaved] = useState(currentUser?.savedPostIds.includes(id) ?? false)

    return (
        <div 
            className="hover:bg-(--accent-hover-light)! hover:border-(--border-strong)!
                flex bg-(--surface-1) gap-5 p-5 border border-(--border) rounded-2xl transition-colors duration-100"
        >
            <div className="hidden xs:flex flex-col gap-2 items-center">
                <button 
                    onClick={isLoggedIn 
                        ?   () => console.log("Upvoted")
                        :   () => setAuthType("sign-up")
                    }
                    aria-label={`Upvote post ${title}`} 
                    className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                >
                    <Triangle className="size-4"/>
                </button>
                <p className="font-medium text-normal!">
                    {score}
                </p>
                <button 
                    onClick={isLoggedIn 
                        ?   () => console.log("Downvoted")
                        :   () => setAuthType("sign-up")
                    }
                    aria-label={`Downvote post ${title}`} 
                    className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                >
                    <Triangle className="size-4 triangle-down"/>
                </button>
            </div>
            <div>
                <Link 
                    to={`/b/${boardName}/${id.toString()}`}
                >
                    <div className="flex items-center gap-3">
                        {!noFlair &&
                            <span 
                                className="hidden xs:block text-xs px-3 py-0.5 font-medium rounded-sm"
                                style={{
                                    backgroundColor: `rgba(${color}, 0.1)`,
                                    color: `rgba(${color}, 1)`
                                }}
                            >
                                {flair}
                            </span>
                        }
                        <p className="text-xs!">
                            {!useBoardName
                                ?   <>Posted by <b>u/{authorUsername}</b></>
                                :   <>Posted in <b>b/{boardName}</b></>
                            }
                        </p>
                        <p className="text-xs! text-(--text-muted)!">
                            {getTimeAgo(createdAt)}
                        </p>
                    </div>
                    <div className="mt-2">
                        <h3 className="line-clamp-3">
                            {title}
                        </h3>
                        <p className="mt-2 line-clamp-2">
                            {body}
                        </p>
                    </div>
                </Link>
                <div className="flex mt-3 gap-4 items-center">
                    <div className="flex items-center gap-2 xs:hidden">
                        <button 
                            onClick={isLoggedIn 
                                ?   () => console.log("Upvoted")
                                :   () => setAuthType("sign-up")
                            }
                            aria-label={`Upvote post ${title}`} 
                            className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                        >
                            <Triangle className="size-4"/>
                        </button>
                        <p className="font-medium">
                            {score}
                        </p>
                        <button 
                            onClick={isLoggedIn 
                                ?   () => console.log("Downvoted")
                                :   () => setAuthType("sign-up")
                            }
                            aria-label={`Downvote post ${title}`} 
                            className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                        >
                            <Triangle className="size-4 triangle-down"/>
                        </button>
                    </div>
                    <Link 
                        to={`/b/${boardName}/${id.toString()}`}
                        className="text-(--text-muted) text-sm flex items-center gap-2 active:text-(--text-secondary) lg:hover:text-(--text-secondary)"
                    >
                        <MessageSquare className="size-4"/>
                        {commentCount} comments
                    </Link>
                    <button 
                        onClick={isLoggedIn 
                            ?   () => console.log("Saved")
                            :   () => setAuthType("sign-up")
                        }
                        className={`group ${isSaved ? "text-(--text-secondary)" : "text-(--text-muted)"} active:text-(--text-secondary) lg:hover:text-(--text-secondary) flex items-center gap-2 text-sm ml-auto xs:ml-0`}
                    >
                        <Bookmark className={`${isSaved ? "fill-(--text-secondary)" : ""} size-4`}/>
                        <p className="transition-colors duration-100 hidden xs:block text-(--text-muted)! lg:group-hover:text-(--text-secondary)!">
                            {isSaved ? "Unsave" : "Save"}
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}