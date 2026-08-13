import { useState } from "react"
import { useLocation, Link } from "react-router"
import { boards, boardRules, currentUser } from "../../data"
import { ChartNoAxesColumn, Hourglass } from "lucide-react"
import { useGlobalContext } from "../utils"
import ProfilePicture from "../components/ProfilePicture"

type Filter = "today" | "this week" | "this month" | "this year" | "all time"
type Sort = "new" | "top"

export default function Board() {

    const [filter, setFilter] = useState<Filter>("all time")
    const [sort, setSort] = useState<Sort>("top")
    const { isLoggedIn } = useGlobalContext()

    const currentBoard = useLocation().pathname.slice(1)
    const boardInfo = boards.find(item => item.name === currentBoard)
    const rules = boardRules[currentBoard.slice(2)]

    console.log(rules)

    return (
        <>
            <section className="flex flex-col flex-1 md:mr-(--sidebar-right-width) py-5 lg:pr-10">
                <h1>{boardInfo?.name}</h1>
                <div className="flex items-center justify-between bg-(--surface-1) py-2 px-4 border border-(--border) rounded-2xl mt-5">
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setSort("new")}
                            aria-label="Filter by newest posts"
                            className={`
                                ${sort === "new" ? "text-(--accent-text)! bg-(--accent)!" : ""} 
                                flex items-center text-(--text-muted) text-xs gap-2 font-medium py-2 px-4 rounded-md active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)
                            `}
                        >
                            <Hourglass className="size-3.5"/>
                            New
                        </button>
                        <button 
                            onClick={() => setSort("top")}
                            aria-label="Filter by top posts"
                            className={`
                                ${sort === "top" ? "text-(--accent-text)! bg-(--accent)!" : ""} 
                                flex items-center text-(--text-muted) text-xs gap-2 font-medium py-2 px-4 rounded-md active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)
                            `}
                        >
                            <ChartNoAxesColumn className="size-3.5"/>
                            Top
                        </button>
                    </div>
                    <div>
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
                </div>
                <div className="flex items-center gap-4 py-2 px-4 bg-(--surface-1) border border-(--border) rounded-2xl mt-4">
                    <ProfilePicture size="size-10"/>
                    <Link 
                        to="submit"
                        className="text-xs font-medium text-(--text-muted) bg-(--surface-2) flex-1 text-left py-2 px-4 border border-(--border) rounded-xl"
                    >
                        Create a post in {boardInfo?.name}...
                    </Link>
                </div>
            </section>
            <section className="hidden md:flex md:flex-col fixed z-10 my-5 mr-5 lg:mr-10 right-0 w-(--sidebar-right-width) top-(--header-height) bottom-0 bg-(--surface-1) border border-(--border) rounded-2xl overflow-hidden shrink-0">
                <div className="bg-(--accent) py-4 px-5 shrink-0">
                    <span className={`size-10 font-bold flex items-center justify-center rounded-lg ${boardInfo?.colorClass}`}>
                        {boardInfo?.name.charAt(2).toUpperCase()}
                    </span>
                </div>
                <div className="py-4 px-5 flex-1 flex flex-col min-h-0">
                    <div className="shrink-0">
                        <h2 className="font-bold">{boardInfo?.name}</h2>
                        <p className="mt-2">{boardInfo?.description}</p>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex flex-col gap-0">
                                <p className="font-bold">{boardInfo?.memberCount}</p>
                                <p className="text-xs!">Members</p>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="font-bold">{boardInfo?.postCount}</p>
                                <p className="text-xs!">Posts</p>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="font-bold">{boardInfo?.createdAt}</p>
                                <p className="text-xs!">Created</p>
                            </div>
                        </div>
                        <button
                            className="bg-(--primary-btn) text-(--primary-btn-text) text-sm w-full py-3 rounded-lg mt-4 font-medium active:bg-(--accent) lg:hover:bg-(--accent)"
                        >
                            {isLoggedIn && currentUser.joinedBoardNames.includes(currentBoard)
                                ?   "Leave board"
                                :   "Join board"
                            }
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col min-h-0 mt-4">
                        <h2 className="shrink-0">Board rules</h2>
                        <ol className="text-sm flex flex-col gap-2 mt-3 flex-1 min-h-0 overflow-y-auto scrollbar-thin">
                            {rules.map((item, index) => 
                                <li key={index} className="flex">
                                    <span className="font-medium mr-4 text-(--text-muted)!">
                                        {index + 1}.
                                    </span>
                                    <p>{item}</p>
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
            </section>
        </>
    )
}