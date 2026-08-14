import { Link, useOutletContext, useParams } from "react-router"
import { posts, currentUser } from "../../data"
import { ChevronDown, ChevronUp, MoveLeft, MessageSquare, Bookmark, Hourglass, ChartNoAxesColumn } from "lucide-react"
import { getTimeAgo } from "../utils"

import type { BoardContext } from "../components/BoardLayout"
import { useState } from "react"

export default function Post() {

    const { postId } = useParams()
    const post = posts.find(item => item.id === Number(postId))
    const { boardInfo } = useOutletContext<BoardContext>()
    const [isCommentBoxActive, setIsCommentBoxActive] = useState(false)
    const [sort, setSort] = useState("top")

    if (!post) return

    return (
        <div>
            <Link 
                to={`/b/${boardInfo.name}`}
                className="flex mb-3 w-fit items-center gap-2 text-(--text-muted) text-xs active:text-(--text-secondary) lg:hover:text-(--text-secondary)"
            >
                <MoveLeft className="size-3"/>
                Back to b/{boardInfo.name}
            </Link>
            <div className="flex gap-5 bg-(--surface-1) p-5 border border-(--border) rounded-2xl">
                <div className="hidden xs:flex flex-col gap-1 items-center">
                    <button
                        onClick={() => console.log("Upvoted")}
                        aria-label={`Upvote post ${post.title}`}
                        className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                    >
                        <ChevronUp className="size-5"/>
                    </button>
                    <p className="font-medium">
                        {post.score}
                    </p>
                    <button
                        onClick={() => console.log("Downvoted")}
                        aria-label={`Downvote post ${post.title}`}
                        className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                    >
                        <ChevronDown className="size-5"/>
                    </button>
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <span className={`hidden xs:block ${boardInfo.colorClass} text-xs px-3 py-0.5 font-medium rounded-sm`}>
                            {post.flair}
                        </span>
                        <p className="text-xs!">
                            Posted by <b>{post.authorUsername}</b>
                        </p>
                        <p className="text-xs! text-(--text-muted)!">
                            {getTimeAgo(post.createdAt)}
                        </p>
                    </div>
                    <div className="mt-2">
                        <h2 className="line-clamp-3 text-lg leading-6 md:text-xl md:leading-7">
                            {post.title}
                        </h2>
                        <span className={`block w-fit xs:hidden mt-2 ${boardInfo.colorClass} text-xs px-3 py-0.5 font-medium rounded-sm`}>
                            {post.flair}
                        </span>
                        <p className="mt-2 whitespace-pre-line">
                            {post.content}
                        </p>
                    </div>
                    <div className="flex mt-3 gap-4 items-center">
                        <div className="flex items-center gap-1.5 xs:hidden">
                            <button
                                onClick={() => console.log("Downvoted")}
                                aria-label={`Upvote post ${post.title}`}
                                className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                            >
                                <ChevronUp className="size-5"/>
                            </button>
                            <p className="font-medium">
                                {post.score}
                            </p>
                            <button
                                onClick={() => console.log("Downvoted")}
                                aria-label={`Downvote post ${post.title}`}
                                className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                            >
                                <ChevronDown className="size-5"/>
                            </button>
                        </div>
                        <div className="text-(--text-muted) text-sm flex items-center gap-2">
                            <MessageSquare className="size-4"/>
                            {post.commentCount} comments
                        </div>
                        <button
                            onClick={() => console.log("Saved")}
                            className="group text-(--text-muted) active:text-(--text-secondary) lg:hover:text-(--text-secondary) flex items-center gap-2 text-sm ml-auto xs:ml-0"
                        >
                            <Bookmark className="size-4"/>
                            <p className="transition-colors duration-100 hidden xs:block text-(--text-muted)! lg:group-hover:text-(--text-secondary)!">Save</p>
                        </button>
                    </div>
                </div>
            </div>
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
            <div className="mt-5 flex items-center justify-between">
                <p className="">
                    {post.commentCount} comments
                </p>
                <div className="flex gap-2">
                    <button 
                        onClick={() => setSort("new")}
                        aria-label="Filter by newest posts"
                        className={`
                            ${sort === "new" ? "text-(--accent-text)! bg-(--accent)!" : ""} 
                            flex shrink-0 items-center text-(--text-muted) text-xs gap-2 font-medium py-2 px-2 xs:px-4 rounded-md active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)
                            `}
                    >
                        <Hourglass className="size-3.5"/>
                        <div className="hidden xs:block">New</div>
                    </button>
                    <button 
                        onClick={() => setSort("top")}
                        aria-label="Filter by top posts"
                        className={`
                            ${sort === "top" ? "text-(--accent-text)! bg-(--accent)!" : ""} 
                            flex shrink-0 items-center text-(--text-muted) text-xs gap-2 font-medium py-2 px-2 xs:px-4 rounded-md active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)
                            `}
                    >
                        <ChartNoAxesColumn className="size-3.5"/>
                        <div className="hidden xs:block">Top</div>
                    </button>
                </div>
            </div>
        </div>
    )
}