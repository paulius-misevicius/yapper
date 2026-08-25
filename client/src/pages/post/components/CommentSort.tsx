import type { Sort } from "../../../utils/types"
import { Hourglass, ChartNoAxesColumn } from "lucide-react"

interface CommentSortProps {
    commentCount: number
    sort: Sort
    setSort: React.Dispatch<React.SetStateAction<Sort>>
}

export default function CommentSort({commentCount, sort, setSort}: CommentSortProps) {
    return (
        <div className="mt-5 flex items-center justify-between">
            <p className="">
                {commentCount} comments
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
    )
}