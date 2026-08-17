import { useState } from "react"
import { useOutletContext, Link } from "react-router"
import { posts } from "../../../data/board"
import { Triangle, Bookmark, ChartNoAxesColumn, Hourglass, MessageSquare, SlidersVertical } from "lucide-react"
import ProfilePicture from "../../components/ProfilePicture"
import type { Board } from "../../../data/home"
import BoardMobileSettings from "./components/BoardMobileSettings"
import BoardAbout from "./components/BoardAbout"
import { getTimeAgo } from "../../utils"

import type { BoardContext } from "../../components/BoardLayout"
import type { Sort, Filter } from "../../utils"

type MobileTab = "feed" | "about"

export default function Board() {

    const [filter, setFilter] = useState<Filter>("all time")
    const [sort, setSort] = useState<Sort>("top")
    const [isMobileSettingsOpen, setIsMobileSettingsOpen] = useState(false)
    const [mobileTab, setMobileTab] = useState<MobileTab>("feed")
    const { boardInfo, board, rules } = useOutletContext<BoardContext>()
    const [hoveredItemId, setHoveredItemId] = useState<number | null>(null)

    const boardPosts = posts.filter(item => item.boardName === board)
    const sortedPosts = sort === "top" 
        ?   [...boardPosts].sort((a, b) => b.score - a.score)
        :   [...boardPosts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return (
        <>
            {isMobileSettingsOpen && 
                <BoardMobileSettings 
                    setIsMobileSettingsOpen={setIsMobileSettingsOpen} 
                    sort={sort} setSort={setSort}
                    filter={filter} setFilter={setFilter}
                />
            }
            <h1>b/{boardInfo.name}</h1>
            <div className="flex flex-wrap min-w-0 items-center gap-4 py-2 px-3 bg-(--surface-1) border border-(--border) rounded-2xl mt-4">
                <ProfilePicture size="size-9"/>
                <Link 
                    to="create"
                    className="text-xs font-medium text-(--text-muted) bg-(--surface-2) flex-1 text-left py-2 px-4 border border-(--border) rounded-md truncate min-w-0"
                >
                    Create a post in b/{boardInfo.name}...
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
                    onClick={() => setIsMobileSettingsOpen(true)}
                    aria-label="Filter by top posts"
                    className="xs:hidden shrink-0 items-center text-(--text-muted) text-xs gap-2 font-medium rounded-md active:bg-(--accent-hover)"
                >
                    <SlidersVertical className="size-5"/>
                </button>
            </div>
            <div className="flex gap-5 mt-4 md:hidden items-center border-b border-(--border)">
                <button
                    onClick={() => setMobileTab("feed")}
                    className={`
                        font-medium text-sm text-(--text-muted) pb-1 border-b-2 border-transparent px-1
                        ${mobileTab === "feed" ? "text-(--text-secondary) border-(--text-secondary)!" : ""}
                    `}
                >
                    Feed
                </button>
                <button
                    onClick={() => setMobileTab("about")}
                    className={`
                        font-medium text-sm text-(--text-muted) pb-1 border-b-2 border-transparent px-1
                        ${mobileTab === "about" ? "text-(--text-secondary) border-(--text-secondary)!" : ""}
                    `}
                >
                    About
                </button>
            </div>

            {mobileTab === "feed" 
                ?
                    <div className="flex flex-col gap-4 mt-5">
                        {sortedPosts.map(item =>
                            <div 
                                key={item.id}
                                className={`
                                    ${hoveredItemId === item.id ? "bg-(--accent-hover-light)! border-(--border-strong)!" : ""} 
                                    flex bg-(--surface-1) gap-5 p-5 border border-(--border) rounded-2xl transition-colors duration-100`
                                }
                            >
                                <div className="hidden xs:flex flex-col gap-2 items-center">
                                    <button 
                                        onClick={() => console.log("Upvoted")}
                                        aria-label={`Upvote post ${item.title}`} 
                                        className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                                    >
                                        <Triangle className="size-4"/>
                                    </button>
                                    <p className="font-medium text-normal!">
                                        {item.score}
                                    </p>
                                    <button 
                                        onClick={() => console.log("Downvoted")}
                                        aria-label={`Downvote post ${item.title}`} 
                                        className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                                    >
                                        <Triangle className="size-4 triangle-down"/>
                                    </button>
                                </div>
                                <div>
                                    <Link 
                                        to={item.id.toString()}
                                        onMouseEnter={() => setHoveredItemId(item.id)}
                                        onMouseDown={() => setHoveredItemId(item.id)}
                                        onMouseLeave={() => setHoveredItemId(null)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`hidden xs:block ${boardInfo.colorClass} text-xs px-3 py-0.5 font-medium rounded-sm`}>
                                                {item.flair}
                                            </span>
                                            <p className="text-xs!">
                                                Posted by <b>{item.authorUsername}</b>
                                            </p>
                                            <p className="text-xs! text-(--text-muted)!">
                                                {getTimeAgo(item.createdAt)}
                                            </p>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="line-clamp-3">
                                                {item.title}
                                            </h3>
                                            <p className="mt-2 line-clamp-2">
                                                {item.body}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="flex mt-3 gap-4 items-center">
                                        <div className="flex items-center gap-2 xs:hidden">
                                            <button 
                                                onClick={() => console.log("Downvoted")}
                                                aria-label={`Upvote post ${item.title}`} 
                                                className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                                            >
                                                <Triangle className="size-4"/>
                                            </button>
                                            <p className="font-medium">
                                                {item.score}
                                            </p>
                                            <button 
                                                onClick={() => console.log("Downvoted")}
                                                aria-label={`Downvote post ${item.title}`} 
                                                className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                                            >
                                                <Triangle className="size-4 triangle-down"/>
                                            </button>
                                        </div>
                                        <Link 
                                            to={item.id.toString()}
                                            onMouseEnter={() => setHoveredItemId(item.id)}
                                            onMouseDown={() => setHoveredItemId(item.id)}
                                            onMouseLeave={() => setHoveredItemId(null)}
                                            className="text-(--text-muted) text-sm flex items-center gap-2 active:text-(--text-secondary) lg:hover:text-(--text-secondary)"
                                        >
                                            <MessageSquare className="size-4"/>
                                            {item.commentCount} comments
                                        </Link>
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
                        )}
                    </div>
                :
                    <BoardAbout board={board} boardInfo={boardInfo} rules={rules} />
            }
        </>
    )
}