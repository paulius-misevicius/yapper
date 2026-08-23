import { Link } from "react-router"
import { UsersRound, StickyNotes } from "lucide-react"
import { useGlobalContext } from "../../../utils"
import type { BoardProps } from "../../../types"

export default function BoardPreview({id, name, color, description, memberCount, postCount}: BoardProps) {

    const { isLoggedIn, currentUser } = useGlobalContext()

    return (
        <Link 
            to={`b/${name}`}
            key={id}
            aria-label={`Go to b/${name}`}
            className="active:bg-(--accent-hover-light) active:border-(--border-strong) lg:hover:bg-(--accent-hover-light) lg:hover:border-(--border-strong) bg-(--surface-1) text-left flex flex-col gap-4 p-5 border border-(--border) rounded-2xl"
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <span 
                        className={`size-10 font-bold flex items-center justify-center rounded-lg`}
                        style={{
                            backgroundColor: `rgba(${color}, 0.1)`,
                            color: `rgba(${color}, 1)`
                        }}
                    >
                        {name.charAt(0).toUpperCase()}
                    </span>
                    <h2>b/{name}</h2>
                </div>
                {isLoggedIn && currentUser && currentUser.joinedBoardNames.find((board) => board === name) &&
                    <span className="text-xs bg-(--accent) py-1 px-4 rounded-lg font-medium text-(--accent-text)">
                        Joined
                    </span>
                }
            </div>
            <p>{description}</p>
            <div className="flex justify-between border-t border-(--border) pt-3">
                <div className="flex gap-5">
                    <p className="flex items-center">
                        <UsersRound className="size-4 mr-2 text-(--text-muted)"/>
                        <b className="mr-1 font-semibold">{memberCount}</b>
                        {" "} members
                    </p>
                    <p className="flex items-center">
                        <StickyNotes className="size-4 mr-2 text-(--text-muted)"/>
                        <b className="mr-1 font-semibold">{postCount}</b>
                        {" "} posts
                    </p>
                </div>
            </div>
        </Link>
    )
}