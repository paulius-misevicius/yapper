import { useOutletContext, Link } from "react-router"
import { MoveLeft, Triangle, MessageSquare, Bookmark } from "lucide-react"
import type { BoardContext } from "../../../components/BoardLayout"
import { getTimeAgo } from "../../../utils"
import type { BoardPost } from "../../../../data/board"
import { useGlobalContext } from "../../../utils"
import { useState } from "react"

export default function PostBody({boardName, title, score, flair, authorUsername, createdAt, body, commentCount, id}: BoardPost) {

    const { boardInfo } = useOutletContext<BoardContext>()
    const { isLoggedIn, setAuthType, currentUser } = useGlobalContext()
    const [isSaved, setIsSaved] = useState(currentUser?.savedPostIds.includes(id) ?? false)

    return (
        <>
            <Link 
                to={`/b/${boardName}`}
                className="flex mb-3 w-fit items-center gap-2 text-(--text-muted) text-xs active:text-(--text-secondary) lg:hover:text-(--text-secondary)"
            >
                <MoveLeft className="size-3"/>
                Back to b/{boardName}
            </Link>
            <div className="flex gap-5 bg-(--surface-1) p-5 border border-(--border) rounded-2xl">
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
                <div>
                    <div className="flex items-center gap-3">
                        <span 
                            className={`hidden xs:block text-xs px-3 py-0.5 font-medium rounded-sm`}
                            style={{
                                backgroundColor: `rgba(${boardInfo.color}, 0.1)`,
                                color: `rgba(${boardInfo.color}, 1)`
                            }}
                        >
                            {flair}
                        </span>
                        <p className="text-xs!">
                            Posted by <b>{authorUsername}</b>
                        </p>
                        <p className="text-xs! text-(--text-muted)!">
                            {getTimeAgo(createdAt)}
                        </p>
                    </div>
                    <div className="mt-2">
                        <h2 className="line-clamp-3 text-lg leading-6 md:text-xl md:leading-7">
                            {title}
                        </h2>
                        <span className={`block w-fit xs:hidden mt-2 text-xs px-3 py-0.5 font-medium rounded-sm`}>
                            {flair}
                        </span>
                        <p className="mt-2 whitespace-pre-line">
                            {body}
                        </p>
                    </div>
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
                        <div className="text-(--text-muted) text-sm flex items-center gap-2">
                            <MessageSquare className="size-4"/>
                            {commentCount} comments
                        </div>
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
        </>
    )
}