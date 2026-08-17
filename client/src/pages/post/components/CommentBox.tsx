import { currentUser } from "../../../../data/user"

interface CommentBoxProps {
    isCommentBoxActive: boolean
    setIsCommentBoxActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CommentBox({isCommentBoxActive, setIsCommentBoxActive}: CommentBoxProps) {
    return (
        <div className="flex mt-5 flex-col bg-(--surface-1) p-5 border border-(--border) rounded-2xl">
            <label
                className="text-xs text-(--text-secondary)"
                htmlFor="comment-box"
            >
                Comment as <b>{currentUser.username}</b>
            </label>
            {isCommentBoxActive
                ?
                    <>
                        <textarea 
                            id="comment-box"
                            placeholder="Type your comment here..."
                            rows={2}
                            className="bg-(--surface-1) mt-3 min-h-14 max-h-40 px-3 py-2 rounded-md border border-(--border)"
                        />
                        <button
                            className="mt-3 w-fit self-end action-btn bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent)"
                        >
                            Comment
                        </button>
                    </>
                :
                    <button
                        onClick={() => setIsCommentBoxActive(true)}
                        className="mt-3 bg-(--surface-2) text-left px-3 py-2 text-sm text-(--text-muted) rounded-md border border-(--border)"
                    >
                        Click to start typing...
                    </button>
            }
        </div>
    )
}