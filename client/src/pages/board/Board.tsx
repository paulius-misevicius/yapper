import { useState } from "react"
import { useOutletContext, Link } from "react-router"
import { posts } from "../../../data/board"
import { ChartNoAxesColumn, Hourglass, SlidersVertical } from "lucide-react"
import ProfilePicture from "../../components/ProfilePicture"
import type { Board } from "../../../data/home"
import BoardMobileSettings from "./components/BoardMobileSettings"
import BoardAbout from "./components/BoardAbout"
import { useGlobalContext } from "../../utils"

import type { BoardContext } from "../../components/BoardLayout"
import type { Sort, Filter } from "../../utils"
import PostCard from "./components/PostCard"

type MobileTab = "feed" | "about"

export default function Board() {

    const [filter, setFilter] = useState<Filter>("all time")
    const [sort, setSort] = useState<Sort>("top")
    const [isMobileSettingsOpen, setIsMobileSettingsOpen] = useState(false)
    const [mobileTab, setMobileTab] = useState<MobileTab>("feed")
    const { boardInfo, board, rules } = useOutletContext<BoardContext>()
    const { isLoggedIn, setAuthType } = useGlobalContext()

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
                {isLoggedIn
                    ?   
                        <Link 
                            to="create"
                            className="text-xs font-medium text-(--text-muted) bg-(--surface-2) flex-1 text-left py-2 px-4 border border-(--border) rounded-md truncate min-w-0"
                        >
                            Create a post in b/{boardInfo.name}...
                        </Link>
                    :   
                        <button
                            onClick={() => setAuthType("sign-up")}
                            className="text-xs font-medium text-(--text-muted) bg-(--surface-2) flex-1 text-left py-2 px-4 border border-(--border) rounded-md truncate min-w-0"
                        >
                            Create a post in b/{boardInfo.name}...
                        </button>
                }
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
                            <PostCard 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                score={item.score}
                                body={item.body}
                                authorUsername={item.authorUsername}
                                createdAt={item.createdAt}
                                commentCount={item.commentCount}
                                flair={item.flair}
                                boardName={item.boardName}
                                colorClass={boardInfo.colorClass}
                            />
                        )}
                    </div>
                :
                    <BoardAbout board={board} boardInfo={boardInfo} rules={rules} />
            }
        </>
    )
}