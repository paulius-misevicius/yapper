import { useState } from "react"
import { useGlobalContext } from "../utils.ts"
import { Link } from "react-router"
import { UsersRound, StickyNotes, Search, ArrowUp, MessageSquare, X } from "lucide-react"
import { boards, recentPosts, currentUser } from "../../data.ts"

export default function Home() {

    const [searchValue, setSearchValue] = useState("")
    const { isLoggedIn } = useGlobalContext()

    const filteredBoards = searchValue !== "" 
        ?   boards.filter(item => item.name.includes(searchValue))
        :   boards

    const recentPostsCollection = recentPosts.map(item => {
        return (
            <div 
                key={item.id}
                className="flex flex-col gap-2 border-b border-(--border) last:border-0 pb-5"
            >
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className={`${item.dotColorClass} rounded-full size-2.25`}/>
                        <h3 className="text-sm text-(--text-muted)! font-medium!">
                            b/{item.boardName}
                        </h3>
                    </div>
                    <p className="text-(--text-muted)! text-xs!">
                        {item.timeAgo}
                    </p>
                </div>
                <Link
                    to={`b/${item.boardName}/${item.id}`}
                    title={item.title}
                    className="active:text-(--accent-text) line-clamp-2 text-sm text-(--text-secondary) font-medium lg:hover:text-(--accent-text)"
                >
                    {item.title}
                </Link>
                <div className="flex gap-4">
                    <p className="flex items-center gap-1 text-(--text-muted)! text-xs!">
                        <ArrowUp className="size-3"/>
                        {item.upvotes} upvotes
                    </p>
                    <p className="flex items-center gap-1.5 text-(--text-muted)! text-xs!">
                        <MessageSquare className="size-3"/>
                        {item.commentCount} comments
                    </p>
                </div>
            </div>
        )
    })

    const homeBoardCollection = filteredBoards.map(item => 
        <Link 
            to={`b/${item.name}`}
            key={item.id}
            aria-label={`Go to b/${item.name}`}
            className="active:bg-(--accent-hover-light) active:border-(--border-strong) lg:hover:bg-(--accent-hover-light) lg:hover:border-(--border-strong) bg-(--surface-1) text-left flex flex-col gap-4 p-5 border border-(--border) rounded-2xl"
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <span className={`size-10 font-bold flex items-center justify-center rounded-lg ${item.colorClass}`}>
                        {item.name.charAt(0).toUpperCase()}
                    </span>
                    <h2>b/{item.name}</h2>
                </div>
                {isLoggedIn && currentUser.joinedBoardNames.find(board => board === item.name) &&
                    <span className="text-xs bg-(--accent) py-1 px-4 rounded-lg font-medium text-(--accent-text)">
                        Joined
                    </span>
                }
            </div>
            <p>{item.description}</p>
            <div className="flex justify-between border-t border-(--border) pt-3">
                <div className="flex gap-5">
                    <p className="flex items-center">
                        <UsersRound className="size-4 mr-2 text-(--text-muted)"/>
                        <b className="mr-1 font-semibold">{item.memberCount}</b>
                        {" "} members
                    </p>
                    <p className="flex items-center">
                        <StickyNotes className="size-4 mr-2 text-(--text-muted)"/>
                        <b className="mr-1 font-semibold">{item.postCount}</b>
                        {" "} posts
                    </p>
                </div>
            </div>
        </Link>
    )

    return (
        <>
            <section className="flex flex-1 md:mr-(--sidebar-right-width) py-5">
                <div className="flex-1">
                    <div className="flex flex-col xs:flex-row justify-between items-center mb-5">
                        <h1 className="whitespace-nowrap self-start mb-3 xs:mb-0">All boards</h1>
                        <div className="flex w-full xs:w-60">
                            <label htmlFor="search-boards" className="sr-only">Search boards</label>
                            <div className="relative grow">
                                <input 
                                    onChange={event => setSearchValue(event.target.value)}
                                    value={searchValue}
                                    id="search-boards" 
                                    placeholder="Enter a board name"
                                    className="w-full py-2 pl-9 pr-5"
                                />
                                <Search className="input-icon size-3.5 left-3"/>
                                {searchValue.length > 0 &&
                                    <button 
                                        className="input-icon right-3 size-4"
                                        aria-label="Clear search input"
                                        onClick={() => setSearchValue("")}
                                    >
                                        <X className="size-4"/>
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                    {homeBoardCollection.length > 0
                        ?
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
                                {homeBoardCollection}
                            </div>
                        :
                            <div className="flex justify-center items-center h-[calc(80%-var(--header-height))]">
                                <p className="text-center font-medium">No boards matched your search!</p>
                            </div>
                    }
                </div>
            </section>
            <section className="hidden md:block fixed z-10 px-6 right-0 w-(--sidebar-right-width) border-l border-(--border) h-[calc(100%-var(--header-height))] py-5">
                <h2>Recent posts</h2>
                <div className="flex flex-col gap-5 mt-5">
                    {recentPostsCollection}
                </div>
            </section>
        </>
    )
}