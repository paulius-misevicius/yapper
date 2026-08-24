import { Link, useOutletContext, useNavigate } from "react-router"
import { useState, useEffect } from "react"
import { useGlobalContext } from "../utils/utils"
import type { BoardContext } from "../components/BoardLayout"
import { TailSpin } from "react-loader-spinner"

interface NewPost {
    flair: string
    title: string
    body: string
}

export default function CreatePost() {

    const { isLoggedIn, setAuthType, currentUser } = useGlobalContext()
    const [error, setError] = useState<string | null>(null)
    const [isSubmiting, setIsSubmitting] = useState(false)
    const { boardInfo } = useOutletContext<BoardContext>()
    const [postDetails, setPostDetails] = useState<NewPost>(
        {
            flair: "", 
            title: "", 
            body: ""
        }
    )

    const navigate = useNavigate()

    async function createPost() {
        setError(null)

        const { flair, title, body } = postDetails

        if (!flair || !title || !body) {
            setError("Missing required fields.")
            return
        }

        try {
            setIsSubmitting(true)

            const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    boardId: boardInfo.id,
                    title,
                    body,
                    flair,
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }

            const data = await response.json()

            navigate(`/b/${boardInfo.name}/${data.postId}`)
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        } finally {
            setIsSubmitting(false)
        }
    }
    
    useEffect(() => {
        if (!isLoggedIn || !currentUser) {
            navigate("/", { replace: true })
            setAuthType("sign-up")
        }
    }, [isLoggedIn, currentUser])
    
    if (!isLoggedIn || !currentUser) {
        return
    }

    return (
        <div>
            <h1>Create a post</h1>
            <div className="bg-(--surface-1) mt-4 p-5 border border-(--border) rounded-2xl">
                <p>Posting to <b>b/{boardInfo.name}</b></p>
                <div className="flex flex-col gap-2 mt-5">
                    <label 
                        className="text-sm font-medium text-(--text-secondary)" 
                        htmlFor="post-flair"
                    >
                        Post flair
                    </label>
                    <select
                        value={postDetails?.flair}
                        onChange={event => {
                            setPostDetails(prev => ({...prev, flair: event.target.value}))
                            setError(null)
                        }}
                        id="post-flair"
                        aria-label="Select post flair"
                        className={`${postDetails.flair === "" ? "text-[#9A9996]" : "text-(--text-secondary)"} px-3! text-sm! w-fit border border-(--border) bg-(--surface-2) focus-visible:text-(--accent-text)! focus-visible:bg-(--accent)! focus-visible:border-(--accent-text)! active:bg-(--accent-hover) active:border-(--border-strong) lg:hover:border-(--border-strong) lg:hover:bg-(--accent-hover)`}
                    >
                        <option 
                            value="" 
                            disabled
                        >
                            Select a flair...
                        </option>
                        <option value="PSA">PSA</option>
                        <option value="Review">Review</option>
                        <option value="Discussion">Discussion</option>
                        <option value="Question">Question</option>
                        <option value="News">News</option>
                    </select>
                </div>
                <div
                    className="flex flex-col mt-5 gap-2"
                >
                    <label 
                        className="text-sm font-medium text-(--text-secondary)" 
                        htmlFor="post-title"
                    >
                        Title
                    </label>
                    <input 
                        value={postDetails.title}
                        onChange={event => {
                            setPostDetails(prev => ({...prev, title: event.target.value}))
                            setError(null)
                        }}
                        id="post-title"
                        className="text-sm font-medium bg-(--surface-2)! px-4 py-2 focus:bg-(--surface-1)!"
                        placeholder="An interesting title for your post..."
                    />
                </div>
                <div
                    className="flex flex-col mt-5 gap-2"
                >
                    <label 
                        className="text-sm font-medium text-(--text-secondary)" 
                        htmlFor="post-body"
                    >
                        Body
                    </label>
                    <textarea 
                        value={postDetails.body}
                        onChange={event => {
                            setPostDetails(prev => ({...prev, body: event.target.value}))
                            setError(null)
                        }}
                        id="post-body"
                        placeholder="Share your thoughts with the community..."
                        rows={7}
                        className="bg-(--surface-2) placeholder:font-medium focus:bg-(--surface-1)! min-h-20 px-4 py-2 rounded-md border border-(--border)"
                    />
                </div>
                <div className="flex flex-col justify-end xs:flex-row xs:items-center mt-5">
                    {error && 
                        <p 
                            role="alert"
                            className="error text-center xs:text-right mb-3 xs:mr-5 xs:mb-0"
                        >
                            {error}
                        </p>
                    }
                    <div className="flex gap-2 w-full xs:w-fit">
                        <Link
                            to={`/b/${boardInfo.name}`}
                            aria-label="Cancel post"
                            className="flex-1 text-(--text-muted) action-btn text-center border-(--border)! active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)"
                        >
                            Cancel
                        </Link>
                        <button
                            onClick={createPost}
                            aria-label="Submit post"
                            className="flex-1 action-btn bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent)"
                        >
                            {isSubmiting 
                                ?   <TailSpin wrapperClass="loader" color="var(--primary-btn-text)" height="22" width="22"/>
                                :   "Post"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}