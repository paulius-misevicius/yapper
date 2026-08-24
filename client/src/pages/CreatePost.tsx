import { Link, useOutletContext, useNavigate } from "react-router"
import { useState, useEffect } from "react"
import { useGlobalContext } from "../utils"
import type { BoardContext } from "../components/BoardLayout"

interface NewPost {
    userId: number
    flair: string
    title: string
    body: string
}

export default function CreatePost() {

    const { isLoggedIn, setAuthType, currentUser } = useGlobalContext()
    const { boardInfo } = useOutletContext<BoardContext>()
    const [postDetails, setPostDetails] = useState<NewPost>(
        {
            userId: currentUser?.id ?? 0, 
            flair: "", 
            title: "", 
            body: ""
        }
    )
    const navigate = useNavigate()
    
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
                        onChange={event => setPostDetails(prev => ({...prev, flair: event.target.value}))}
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
                        <option value="psa">PSA</option>
                        <option value="review">Review</option>
                        <option value="discussion">Discussion</option>
                        <option value="question">Question</option>
                        <option value="news">News</option>
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
                        onChange={event => setPostDetails(prev => ({...prev, title: event.target.value}))}
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
                        onChange={event => setPostDetails(prev => ({...prev, body: event.target.value}))}
                        id="post-body"
                        placeholder="Share your thoughts with the community..."
                        rows={7}
                        className="bg-(--surface-2) placeholder:font-medium focus:bg-(--surface-1)! min-h-20 px-4 py-2 rounded-md border border-(--border)"
                    />
                </div>
                <div className="flex gap-2 justify-end items-center mt-5">
                    <Link
                        to={`/b/${boardInfo.name}`}
                        aria-label="Cancel post"
                        className="text-(--text-muted) action-btn text-center border-(--border)! active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)"
                    >
                        Cancel
                    </Link>
                    <button
                        aria-label="Submit post"
                        className="w-fit action-btn bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent)"
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    )
}