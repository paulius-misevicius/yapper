import { Hourglass, ChartNoAxesColumn } from "lucide-react"
import type { Sort, Filter } from "../../../utils"
import MobileShelfModal from "../../../components/MobileShelfModal"

interface BoardMobileSettingsProps {
    setIsMobileSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>
    sort: Sort
    setSort: React.Dispatch<React.SetStateAction<Sort>>
    filter: Filter
    setFilter: React.Dispatch<React.SetStateAction<Filter>>
}

export default function BoardMobileSettings({setIsMobileSettingsOpen, sort, setSort, filter, setFilter}: BoardMobileSettingsProps) {

    return (
        <MobileShelfModal
            setIsModalOpen={setIsMobileSettingsOpen}
            title="Sort and filter"
        >
            <p className="font-medium">Sort by</p>
            <div className="flex mt-3 gap-2">
                <button
                    onClick={() => setSort("new")}
                    aria-label="Filter by newest posts"
                    className={`
                        ${sort === "new" ? "text-(--accent-text)! bg-(--accent)! border-(--accent-text)!" : ""}
                        flex border border-(--border-strong) flex-1 justify-center items-center text-(--text-muted) gap-2 font-medium py-2 px-2 rounded-md active:bg-(--accent-hover)
                        `}
                >
                    <Hourglass className="size-4"/>
                    New
                </button>
                <button
                    onClick={() => setSort("top")}
                    aria-label="Filter by top posts"
                    className={`
                        ${sort === "top" ? "text-(--accent-text)! bg-(--accent)! border-(--accent-text)!" : ""}
                        flex border border-(--border-strong) flex-1 justify-center items-center text-(--text-muted) gap-2 font-medium py-2 px-2 rounded-md active:bg-(--accent-hover)
                        `}
                >
                    <ChartNoAxesColumn className="size-4"/>
                    Top
                </button>
            </div>
            <div className="mt-5">
                <p className="font-medium">Time range</p>
                <div
                    className="flex flex-col mt-3 gap-2"
                >
                    <button
                        onClick={() => setFilter("all time")}
                        className={`
                            ${filter === "all time" ? "text-(--accent-text)! bg-(--accent)! border-(--accent-text)!" : ""}
                            flex border border-(--border-strong) flex-1 justify-center items-center text-(--text-muted) gap-2 font-medium py-2 px-2 rounded-md active:bg-(--accent-hover)
                        `}
                    >
                        All time
                    </button>
                    <button
                        onClick={() => setFilter("today")}
                        className={`
                            ${filter === "today" ? "text-(--accent-text)! bg-(--accent)! border-(--accent-text)!" : ""}
                            flex border border-(--border-strong) flex-1 justify-center items-center text-(--text-muted) gap-2 font-medium py-2 px-2 rounded-md active:bg-(--accent-hover)
                        `}
                    >
                        Today
                    </button>
                    <button
                        onClick={() => setFilter("this week")}
                        className={`
                            ${filter === "this week" ? "text-(--accent-text)! bg-(--accent)! border-(--accent-text)!" : ""}
                            flex border border-(--border-strong) flex-1 justify-center items-center text-(--text-muted) gap-2 font-medium py-2 px-2 rounded-md active:bg-(--accent-hover)
                        `}
                    >
                        This week
                    </button>
                    <button
                        onClick={() => setFilter("this month")}
                        className={`
                            ${filter === "this month" ? "text-(--accent-text)! bg-(--accent)! border-(--accent-text)!" : ""}
                            flex border border-(--border-strong) flex-1 justify-center items-center text-(--text-muted) gap-2 font-medium py-2 px-2 rounded-md active:bg-(--accent-hover)
                        `}
                    >
                        This month
                    </button>
                    <button
                        onClick={() => setFilter("this year")}
                        className={`
                            ${filter === "this year" ? "text-(--accent-text)! bg-(--accent)! border-(--accent-text)!" : ""}
                            flex border border-(--border-strong) flex-1 justify-center items-center text-(--text-muted) gap-2 font-medium py-2 px-2 rounded-md active:bg-(--accent-hover)
                        `}
                    >
                        This year
                    </button>
                </div>
            </div>
        </MobileShelfModal>
    )
}