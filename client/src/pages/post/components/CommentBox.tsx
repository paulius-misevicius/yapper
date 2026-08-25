import { useGlobalContext } from "../../../utils/utils"
import { useState } from "react"
import type { CommentWithReplies } from "../Post"
import { TailSpin } from "react-loader-spinner"

interface CommentBoxProps {
    isCommentBoxActive: boolean
    setIsCommentBoxActive: React.Dispatch<React.SetStateAction<boolean>>
    setCommentTree: React.Dispatch<React.SetStateAction<CommentWithReplies[]>>
    postId: number
}

export default function CommentBox({isCommentBoxActive, setIsCommentBoxActive, postId, setCommentTree}: CommentBoxProps) {

    const { isLoggedIn, setAuthType, currentUser } = useGlobalContext()
    const [commentBody, setCommentBody] = useState("")
    const [isSubmiting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [info, setInfo] = useState<string | null>(null)

    async function createComment() {
        setError(null)
        setInfo(null)

        if (!commentBody) {
            setError("Missing comment body.")
            return
        }

        try {
            if (!currentUser) return

            setIsSubmitting(true)

            const response = await fetch(`${import.meta.env.VITE_API_URL}/comments/${postId}`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    parentCommentId: null,
                    body: commentBody
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }

            const data = await response.json()
            
            setCommentTree(prev => [...prev, {
                authorUsername: currentUser.username,
                body: commentBody,
                id: data.commentId,
                postId,
                parentCommentId: null,
                createdAt: new Date().toISOString(),
                profilePictureUrl: currentUser.profilePictureUrl,
                replies: [],
                score: 0
            }])
            setCommentBody("")
            setInfo("Comment created!")
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex mt-5 flex-col bg-(--surface-1) p-5 border border-(--border) rounded-2xl">
            <label
                className="text-xs text-(--text-secondary)"
                htmlFor="comment-box"
            >
                {isLoggedIn && currentUser
                    ?   <>Comment as <b>{currentUser.username}</b></>
                    :   <>Leave a <b>comment</b></>
                }
            </label>
            {isCommentBoxActive
                ?
                    <>
                        <textarea 
                            value={commentBody}
                            onChange={event => setCommentBody(event.target.value)}
                            id="comment-box"
                            placeholder="Type your comment here..."
                            rows={2}
                            className="bg-(--surface-1) mt-3 min-h-14 max-h-40 px-3 py-2 rounded-md border border-(--border)"
                        />
                        <div className="flex self-end mt-3 items-center gap-3">
                            {error &&
                                <p
                                    role="alert"
                                    className="error"
                                >
                                    {error}
                                </p>
                            }
                            {info &&
                                <p
                                    role="status"
                                    className="font-medium"
                                >
                                    {info}
                                </p>
                            }
                            <button
                                onClick={createComment}
                                aria-label="Post comment"
                                className="w-fit action-btn bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent)"
                            >
                                {isSubmiting 
                                    ?   <TailSpin wrapperClass="loader" color="var(--primary-btn-text)" height="22" width="22"/>
                                    :   "Comment"
                                }
                            </button>
                        </div>
                    </>
                :
                    <button
                        onClick={isLoggedIn
                            ?   () => setIsCommentBoxActive(true)
                            :   () => setAuthType("sign-up")
                        }
                        className="mt-3 bg-(--surface-2) text-left px-3 py-2 text-sm text-(--text-muted) rounded-md border border-(--border)"
                    >
                        Click to start typing...
                    </button>
            }
        </div>
    )
}