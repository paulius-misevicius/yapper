import { currentUser } from "../../../../data/user"
import { useGlobalContext } from "../../../utils"

interface CommentBoxProps {
    isCommentBoxActive: boolean
    setIsCommentBoxActive: React.Dispatch<React.SetStateAction<boolean>>
    newComment: string
    setNewComment: React.Dispatch<React.SetStateAction<string>>
}

export default function CommentBox({isCommentBoxActive, setIsCommentBoxActive, newComment, setNewComment}: CommentBoxProps) {

    const { isLoggedIn, setAuthType } = useGlobalContext()

    return (
        <div className="flex mt-5 flex-col bg-(--surface-1) p-5 border border-(--border) rounded-2xl">
            <label
                className="text-xs text-(--text-secondary)"
                htmlFor="comment-box"
            >
                {isLoggedIn 
                    ?   <>Comment as <b>{currentUser.username}</b></>
                    :   <>Leave a <b>comment</b></>
                }
            </label>
            {isCommentBoxActive
                ?
                    <>
                        <textarea 
                            value={newComment}
                            onChange={event => setNewComment(event.target.value)}
                            id="comment-box"
                            placeholder="Type your comment here..."
                            rows={2}
                            className="bg-(--surface-1) mt-3 min-h-14 max-h-40 px-3 py-2 rounded-md border border-(--border)"
                        />
                        <button
                            aria-label="Post comment"
                            className="mt-3 w-fit self-end action-btn bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent)"
                        >
                            Comment
                        </button>
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