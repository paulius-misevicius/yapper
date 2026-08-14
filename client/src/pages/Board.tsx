import { useState } from "react"
import { useOutletContext, Link } from "react-router"
import { posts } from "../../data"
import { Bookmark, ChartNoAxesColumn, ChevronDown, ChevronUp, Hourglass, MessageSquare, SlidersVertical } from "lucide-react"
import ProfilePicture from "../components/ProfilePicture"
import type { Board } from "../../data"

type Filter = "today" | "this week" | "this month" | "this year" | "all time"
type Sort = "new" | "top"

interface BoardProps {
    boardInfo: Board
    board: string
}

export default function Board() {

    const [filter, setFilter] = useState<Filter>("all time")
    const [sort, setSort] = useState<Sort>("top")
    const { boardInfo, board } = useOutletContext<BoardProps>()

    const boardPosts = posts.filter(item => item.boardName === `b/${board}`)

    return (
        <>
            <h1>{boardInfo?.name}</h1>
            <div className="flex flex-wrap min-w-0 items-center gap-4 py-2 px-3 bg-(--surface-1) border border-(--border) rounded-2xl mt-4">
                <ProfilePicture size="size-10"/>
                <Link 
                    to="submit"
                    className="text-xs font-medium text-(--text-muted) bg-(--surface-2) flex-1 text-left py-2 px-4 border border-(--border) rounded-md truncate min-w-0"
                >
                    Create a post in {boardInfo?.name}...
                </Link>
                <button 
                    onClick={() => setSort("new")}
                    aria-label="Filter by newest posts"
                    className={`
                        ${sort === "new" ? "text-(--accent-text)! bg-(--accent)!" : ""} 
                        hidden xs:flex shrink-0 items-center text-(--text-muted) text-xs gap-2 font-medium py-2 px-2 xl:px-4 rounded-md active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)
                        `}
                >
                    <Hourglass className="size-3.5"/>
                    <div className="hidden xl:block">New</div>
                </button>
                <button 
                    onClick={() => setSort("top")}
                    aria-label="Filter by top posts"
                    className={`
                        ${sort === "top" ? "text-(--accent-text)! bg-(--accent)!" : ""} 
                        hidden xs:flex shrink-0 items-center text-(--text-muted) text-xs gap-2 font-medium py-2 px-2 xl:px-4 rounded-md active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)
                        `}
                >
                    <ChartNoAxesColumn className="size-3.5"/>
                    <div className="hidden xl:block">Top</div>
                </button>
                <div className="shrink-0 hidden xs:block">
                    <label className="sr-only" htmlFor="post-filter">Filter posts by date range</label>
                    <select
                        value={filter}
                        onChange={event => setFilter(event.target.value as Filter)}
                        id="post-filter"
                        aria-label="Filter board posts"
                        className="text-(--text-muted) border border-(--border) focus-visible:text-(--accent-text)! focus-visible:bg-(--accent)! focus-visible:border-(--accent-text)! active:bg-(--accent-hover) active:border-(--border-strong) lg:hover:border-(--border-strong) lg:hover:bg-(--accent-hover)"
                    >
                        <option value="all time">All time</option>
                        <option value="today">Today</option>
                        <option value="this week">This week</option>
                        <option value="this month">This month</option>
                        <option value="this year">This year</option>
                    </select>
                </div>
                <button 
                    onClick={() => setSort("top")}
                    aria-label="Filter by top posts"
                    className="xs:hidden shrink-0 items-center text-(--text-muted) text-xs gap-2 font-medium rounded-md active:bg-(--accent-hover)"
                >
                    <SlidersVertical className="size-5"/>
                </button>
            </div>
            <div className="flex flex-col gap-4 mt-5">
                {boardPosts.map(item =>
                    <Link 
                        to={item.id.toString()}
                        key={item.id}
                        className="active:bg-(--accent-hover-light) active:border-(--border-strong) lg:hover:bg-(--accent-hover-light) lg:hover:border-(--border-strong) flex bg-(--surface-1) gap-5 p-5 border border-(--border) rounded-2xl"
                    >
                        <div className="hidden xs:flex flex-col gap-1 items-center">
                            <button onClick={event => {
                                event.stopPropagation()
                                console.log("Upvoted")
                                }}>
                                <ChevronUp className="size-5 text-(--text-muted)"/>
                            </button>
                            <p className="font-medium">
                                {item.score}
                            </p>
                            <button onClick={event => {
                                event.stopPropagation()
                                console.log("Downvoted")
                                }}>
                                <ChevronDown className="size-5 text-(--text-muted)"/>
                            </button>
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="hidden xs:block bg-(--accent) text-(--accent-text) text-xs px-3 py-0.5 font-medium rounded-sm">
                                    {item.flair}
                                </span>
                                <p className="text-xs!">
                                    Posted by <b>{item.authorUsername}</b>
                                </p>
                                <p className="text-xs! text-(--text-muted)!">
                                    {item.timeAgo}
                                </p>
                            </div>
                            <div className="mt-2">
                                <h3 className="line-clamp-3">
                                    {item.title}
                                </h3>
                                <p className="mt-2 line-clamp-2">
                                    {item.excerpt}
                                </p>
                            </div>
                            <div className="flex mt-3 gap-4 items-center">
                                <div className="flex items-center gap-1.5 xs:hidden">
                                    <button>
                                        <ChevronUp className="text-(--text-muted) size-5"/>
                                    </button>
                                    <p className="font-medium">
                                        {item.score}
                                    </p>
                                    <button>
                                        <ChevronDown className="text-(--text-muted) size-5"/>
                                    </button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MessageSquare className="text-(--text-muted) size-4"/>
                                    <p>
                                        {item.commentCount} comments
                                    </p>
                                </div>
                                <button 
                                    onClick={event => {
                                        event.stopPropagation()
                                        console.log("Saved")
                                    }}
                                    className="flex items-center gap-2 text-(--text-secondary) text-sm ml-auto xs:ml-0"
                                >
                                    <Bookmark className="size-4 text-(--text-muted)"/>
                                    <p className="hidden xs:block">Save</p>
                                </button>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    )
}