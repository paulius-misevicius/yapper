import type { CommentWithReplies } from "../Post"
import { useState } from "react"
import { MoveRight } from "lucide-react"
import ThreadDesktop from "./ThreadDesktop"
import ThreadMobile from "./ThreadMobile"
import MobileShelfModal from "../../../components/MobileShelfModal"
import { useGlobalContext } from "../../../utils/utils"
import { useVote } from "../../../utils/useVote"
import { TailSpin } from "react-loader-spinner"

export interface CommentThreadProps extends CommentWithReplies {
    depth?: number
    postAuthor: string
    replyBoxId: number
    setReplyBoxId: React.Dispatch<React.SetStateAction<number>>
    setIsNested: React.Dispatch<React.SetStateAction<boolean>>
    setCommentTree: React.Dispatch<React.SetStateAction<CommentWithReplies[]>>
}

export default function CommentThread({ 
    id, 
    postAuthor, 
    postId, 
    parentCommentId, 
    authorUsername, 
    createdAt, 
    profilePictureUrl,
    score, 
    body, 
    replies, 
    setCommentTree, 
    setIsNested, 
    replyBoxId, 
    setReplyBoxId, 
    depth = 0 
}: CommentThreadProps) {

    const { screenWidth, currentUser } = useGlobalContext()
    const [isThreadOpen, setIsThreadOpen] = useState<boolean>(depth === 0 || (depth < 4 && score > 4))
    const [reply, setReply] = useState("")
    const { finalScore, userVote, vote } = useVote(id, "comment", score)
    const [isSubmiting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [info, setInfo] = useState<string | null>(null)
    
    async function createComment() {
        setError(null)
        setInfo(null)

        if (!reply) {
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
                    parentCommentId: id,
                    body: reply
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }

            const data = await response.json()

            const newReply = {
                authorUsername: currentUser.username,
                body: reply,
                id: data.commentId,
                postId,
                parentCommentId: id,
                createdAt: new Date().toISOString(),
                profilePictureUrl: currentUser.profilePictureUrl,
                replies: [],
                score: 0
            }

            function addReply(comments: CommentWithReplies[]): CommentWithReplies[] {
                return comments.map(item => {
                    if (item.id === id) {
                        return { ...item, replies: [...item.replies, newReply] }
                    }
                    if (item.replies.length > 0) {
                        return { ...item, replies: addReply(item.replies) }
                    }
                    return item
                })
            }

            setCommentTree(prev => addReply(prev))
            setReply("")
            setInfo("Comment created!")
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    const childProps = {
        profilePictureUrl,
        isThreadOpen,
        setIsThreadOpen,
        depth,
        postId,
        postAuthor,
        authorUsername,
        createdAt,
        id,
        body,
        score,
        finalScore,
        userVote,
        vote,
        replies,
        parentCommentId,
        replyBoxId,
        setIsNested,
        setCommentTree,
        setReplyBoxId
    }

    const hasReplies = replies.length > 0
    const maxNestDepth = screenWidth >= 768 ? 5 : 3
    const nest = hasReplies && (
        depth < maxNestDepth
            ?   replies.map(item =>
                    <CommentThread
                        key={item.id}
                        id={item.id}
                        postId={postId}
                        parentCommentId={item.parentCommentId}
                        postAuthor={postAuthor}
                        authorUsername={item.authorUsername}
                        profilePictureUrl={item.profilePictureUrl}
                        createdAt={item.createdAt}
                        score={item.score}
                        body={item.body}
                        replies={item.replies}
                        depth={depth + 1}
                        setCommentTree={setCommentTree}
                        setIsNested={setIsNested}
                        replyBoxId={replyBoxId}
                        setReplyBoxId={setReplyBoxId}
                    />
                )
            :   <div className={`flex my-3`}>
                    <div className="border-l border-(--border-strong) pr-4"/>
                    <button 
                        onClick={() => {
                            setCommentTree([
                                { 
                                    id,
                                    postId,
                                    parentCommentId,
                                    profilePictureUrl,
                                    authorUsername,
                                    createdAt,
                                    score,
                                    body,
                                    replies
                                }
                            ])
                            setIsNested(true)
                    }}
                        aria-label={`Continue thread and open comment of ${authorUsername}`}
                        className="flex items-center gap-2 text-sm text-(--text-muted) active:text-(--text-secondary)! lg:hover:text-(--text-secondary)! underline underline-offset-2"
                    >
                        Continue thread
                        <MoveRight className="size-4" />
                    </button>
                </div>
    )
        

    if (screenWidth >= 768) return (
        <ThreadDesktop {...childProps} >
            {replyBoxId === id && 
                <div className="flex mt-1 flex-col bg-(--surface-1)">
                    <label
                        className="text-xs sr-only text-(--text-secondary)"
                        htmlFor="comment-box"
                    >
                        Reply to comment id {parentCommentId}
                    </label>
                    <textarea 
                        value={reply}
                        onChange={event => setReply(event.target.value)}
                        id="comment-box"
                        placeholder="Type your reply here..."
                        rows={2}
                        className="bg-(--surface-1) mt-3 min-h-14 max-h-40 px-3 py-2 rounded-md border border-(--border)"
                    />
                    <div className="flex gap-2 self-end items-center mt-3">
                        {error &&
                            <p
                                role="alert"
                                className="error text-xs! mr-1"
                            >
                                {error}
                            </p>
                        }
                        {info &&
                            <p
                                role="status"
                                className="font-medium text-xs! mr-1"
                            >
                                {info}
                            </p>
                        }
                        <button
                            onClick={() => setReplyBoxId(0)}
                            aria-label="Cancel reply"
                            className="bg-(--surface-1) text-(--text-muted) action-btn text-center border-(--border)! active:bg-(--accent-hover) lg:hover:bg-(--accent-hover) text-xs!"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={createComment}
                            aria-label="Submit reply"
                            className="w-fit action-btn bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent) text-xs!"
                        >
                            {isSubmiting 
                                ?   <TailSpin wrapperClass="loader" color="var(--primary-btn-text)" height="15.5" width="15.5"/>
                                :   "Reply"
                            }
                        </button>
                    </div>
                </div>
            }
            {nest}
        </ThreadDesktop>
    )

    if (screenWidth < 768) return (
        <ThreadMobile {...childProps} >
            {replyBoxId === id &&
                <MobileShelfModal
                    onClose={() => setReplyBoxId(0)}
                    title={`Reply to ${authorUsername}`}
                >
                    <p className="max-h-[45dvh] overflow-y-auto">
                        {body}
                    </p>
                    <div>
                        <label
                            className="text-xs sr-only text-(--text-secondary)"
                            htmlFor="comment-box"
                        >
                            Reply to comment id {parentCommentId}
                        </label>
                        <textarea
                            value={reply}
                            onChange={event => setReply(event.target.value)}
                            id="comment-box"
                            placeholder="Type your reply here..."
                            rows={4}
                            className="bg-(--surface-1) mt-5 min-h-16 max-h-40 px-3 py-2 rounded-md border border-(--border) w-full"
                        />
                        {error &&
                            <p
                                role="alert"
                                className="error text-center mt-2 mr-1"
                            >
                                {error}
                            </p>
                        }
                        {info &&
                            <p
                                role="status"
                                className="font-medium text-center mt-2 mr-1"
                            >
                                {info}
                            </p>
                        }
                        <button
                            onClick={createComment}
                            aria-label="Submit reply"
                            className="w-full mt-3 py-3! action-btn bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent)"
                        >
                            {isSubmiting 
                                ?   <TailSpin wrapperClass="loader" color="var(--primary-btn-text)" height="22" width="22"/>
                                :   "Reply"
                            }
                        </button>
                    </div>
                </MobileShelfModal>
            }
            {nest}
        </ThreadMobile>
    )

}