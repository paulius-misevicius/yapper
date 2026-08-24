import { useOutletContext, Link } from "react-router"
import { MoveLeft, Triangle, MessageSquare, Bookmark } from "lucide-react"
import type { BoardContext } from "../../../components/BoardLayout"
import { getTimeAgo } from "../../../utils"
import { useGlobalContext } from "../../../utils"
import { useEffect, useState } from "react"
import type { PostProps, Vote } from "../../../types"

export default function PostBody({boardName, title, score, flair, authorUsername, createdAt, body, commentCount, id}: PostProps) {

    const { boardInfo } = useOutletContext<BoardContext>()
    const { isLoggedIn, setAuthType, currentUser } = useGlobalContext()
    const [isSaved, setIsSaved] = useState(currentUser?.savedPostIds.includes(id) ?? false)
    const [userVote, setUserVote] = useState<Vote>(0)
    const [postScore, setPostScore] = useState(score)

    useEffect(() => {
        async function checkForVote() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/votes/${id}?type=post`, {
                    credentials: "include"
                })

                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.error)
                }

                const data = await response.json()
                setUserVote(data.value)
            } catch (error) {
                console.error(error)
            }
        }
        checkForVote()
    }, [])

    async function voteOnPost(targetId: number, value: Vote) {
        if (value === userVote) {
            removeVoteFromPost(id)
            return
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/votes?type=post`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    targetId, value
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }

            setUserVote(value)
            setPostScore(prevScore => prevScore - userVote + value)
        } catch (error) {
            console.error(error)
        }
    }

    async function removeVoteFromPost(targetId: number) {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/votes?type=post`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    targetId
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }

            const data = await response.json()

            setUserVote(0)
            setPostScore(prevScore => prevScore - userVote)
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
                            ?   () => voteOnPost(id, 1)
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
                        {postScore}
                    </p>
                    <button
                        onClick={isLoggedIn 
                            ?   () => voteOnPost(id, -1)
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
                                    ?   () => voteOnPost(id, 1)
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
                                {postScore}
                            </p>
                            <button
                                onClick={isLoggedIn 
                                    ?   () => voteOnPost(id, -1)
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