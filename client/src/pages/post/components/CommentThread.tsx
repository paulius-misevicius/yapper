import type { CommentWithReplies } from "../Post"
import { useState, useEffect } from "react"
import { MoveRight } from "lucide-react"
import { users } from "../../../../data/user"
import ThreadDesktop from "./ThreadDesktop"
import ThreadMobile from "./ThreadMobile"

export interface CommentThreadProps extends CommentWithReplies {
    depth?: number
    postAuthor: string
    replyBoxId: number
    setReplyBoxId: React.Dispatch<React.SetStateAction<number>>
    setIsNested: React.Dispatch<React.SetStateAction<boolean>>
    setCommentTree: React.Dispatch<React.SetStateAction<CommentWithReplies[]>>
}

export default function CommentThread({ id, postAuthor, postId, parentCommentId, authorUsername, createdAt, score, body, replies, setCommentTree, setIsNested, replyBoxId, setReplyBoxId, depth = 0 }: CommentThreadProps) {

    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth > 768)
        }

        window.addEventListener("resize", handleResize)
        
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)
    const [isThreadOpen, setIsThreadOpen] = useState<boolean>(depth === 0 || (depth < 4 && score > 4))
    const user = users.find(item => item.username === authorUsername)

    const childProps = {
        profilePictureUrl: user?.profilePictureUrl,
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
        replies,
        parentCommentId,
        replyBoxId,
        setIsNested,
        setCommentTree,
        setReplyBoxId,
    }

    const hasReplies = replies.length > 0
    const maxNestDepth = isDesktop ? 5 : 3
    const nest = hasReplies && (
        depth < maxNestDepth
            ?   replies.map(item =>
                    <CommentThread
                        key={item.id}
                        id={item.id}
                        postId={item.postId}
                        parentCommentId={item.parentCommentId}
                        postAuthor={postAuthor}
                        authorUsername={item.authorUsername}
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
                        className="flex items-center gap-2 text-sm text-(--text-muted) underline underline-offset-2"
                    >
                        Continue thread
                        <MoveRight className="size-4" />
                    </button>
                </div>
    )
        

    if (isDesktop) return (
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
                        id="comment-box"
                        placeholder="Type your reply here..."
                        rows={2}
                        className="bg-(--surface-1) mt-3 min-h-14 max-h-40 px-3 py-2 rounded-md border border-(--border)"
                    />
                    <div className="flex gap-2 self-end items-center mt-3">
                        <button
                            onClick={() => setReplyBoxId(0)}
                            aria-label="Cancel reply"
                            className="bg-white text-(--text-muted) action-btn text-center border-(--border)! active:bg-(--accent-hover) lg:hover:bg-(--accent-hover) text-xs!"
                        >
                            Cancel
                        </button>
                        <button
                            aria-label="Submit reply"
                            className="w-fit action-btn bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent) text-xs!"
                        >
                            Reply
                        </button>
                    </div>
                </div>
            }
            {nest}
        </ThreadDesktop>
    )

    if (!isDesktop) return (
        <ThreadMobile {...childProps} >
            {nest}
        </ThreadMobile>
    )

}