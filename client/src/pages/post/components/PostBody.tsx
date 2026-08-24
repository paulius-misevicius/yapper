import { useOutletContext, Link } from "react-router"
import { MoveLeft, Triangle, MessageSquare, Bookmark } from "lucide-react"
import type { BoardContext } from "../../../components/BoardLayout"
import { getTimeAgo } from "../../../utils/utils"
import { useGlobalContext } from "../../../utils/utils"
import type { PostProps } from "../../../utils/types"
import { useVote } from "../../../utils/useVote"

export default function PostBody({boardName, title, flair, score, authorUsername, createdAt, body, commentCount, id}: PostProps) {

    const { boardInfo } = useOutletContext<BoardContext>()
    const { isLoggedIn, setAuthType, currentUser, setCurrentUser } = useGlobalContext()
    const { finalScore, userVote, vote } = useVote(id, "post", score)
    const isSaved = currentUser?.savedPostIds.includes(id) ?? false

    async function savePost() {
        try {
            if (isSaved) {
                unsavePost()
                return
            }

            const response = await fetch(`${import.meta.env.VITE_API_URL}/saved`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    postId: id
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error)
            }

            setCurrentUser(prev => {
                if (!prev) return prev

                return {
                    ...prev, 
                    savedPostIds: [...prev.savedPostIds, id]
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    async function unsavePost() {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/saved`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    postId: id
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error)
            }

            setCurrentUser(prev => {
                if (!prev) return prev

                return {
                    ...prev, 
                    savedPostIds: prev.savedPostIds.filter(item => item !== id)
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

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
                            ?   () => vote(1)
                            :   () => setAuthType("sign-up")
                        }
                        aria-label={`Upvote post ${title}`}
                    >
                        <Triangle 
                            className={`
                                ${userVote === 1 ? "fill-(--text-secondary) text-(--text-secondary)!" : ""} 
                                text-(--text-muted) active:text-(--text-secondary) lg:hover:text-(--text-secondary) size-4`
                            }
                        />
                    </button>
                    <p className="font-medium">
                        {finalScore}
                    </p>
                    <button
                        onClick={isLoggedIn 
                            ?   () => vote(-1)
                            :   () => setAuthType("sign-up")
                        }
                        aria-label={`Downvote post ${title}`}
                    >
                        <Triangle 
                            className={`
                                ${userVote === -1 ? "fill-(--text-secondary) text-(--text-secondary)!" : ""} 
                                text-(--text-muted) active:text-(--text-secondary) lg:hover:text-(--text-secondary) size-4 triangle-down`
                            }
                        />
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
                        <span 
                            className="block w-fit xs:hidden mt-2 text-xs px-3 py-0.5 font-medium rounded-sm"
                            style={{
                                backgroundColor: `rgba(${boardInfo.color}, 0.1)`,
                                color: `rgba(${boardInfo.color}, 1)`
                            }}
                        >
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
                                    ?   () => vote(1)
                                    :   () => setAuthType("sign-up")
                                }
                                aria-label={`Upvote post ${title}`}
                            >
                                <Triangle 
                                    className={`
                                        ${userVote === 1 ? "fill-(--text-secondary) text-(--text-secondary)!" : ""} 
                                        text-(--text-muted) active:text-(--text-secondary) lg:hover:text-(--text-secondary) size-4`
                                    }
                                />
                            </button>
                            <p className="font-medium">
                                {finalScore}
                            </p>
                            <button
                                onClick={isLoggedIn 
                                    ?   () => vote(-1)
                                    :   () => setAuthType("sign-up")
                                }
                                aria-label={`Downvote post ${title}`}
                            >
                                <Triangle 
                                    className={`
                                        ${userVote === -1 ? "fill-(--text-secondary) text-(--text-secondary)!" : ""} 
                                        text-(--text-muted) active:text-(--text-secondary) lg:hover:text-(--text-secondary) size-4 triangle-down`
                                    }
                                />
                            </button>
                        </div>
                        <div className="text-(--text-muted) text-sm flex items-center gap-2">
                            <MessageSquare className="size-4"/>
                            {commentCount} comments
                        </div>
                        <button 
                            onClick={isLoggedIn && currentUser
                                ?   () => savePost()
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