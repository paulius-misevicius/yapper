import { useState } from "react"
import { NavLink, Link } from "react-router"
import { FocusTrap } from "focus-trap-react"
import { House, UserRound, UsersRound, StickyNotes, Search, ArrowUp, MessageSquare, X, Menu } from "lucide-react"
import { boards, recentPosts, currentUser } from "../../data.ts"

export default function Home() {

    const [searchValue, setSearchValue] = useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const isLoggedIn = false

    const filteredBoards = searchValue !== "" 
        ?   boards.filter(item => item.name.includes(searchValue))
        :   boards

    const recentPostsCollection = recentPosts.map(item => {
        return (
            <div 
                key={item.id}
                className="flex flex-col gap-2 border-b border-(--border) pb-5"
            >
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className={`${item.dotColorClass} rounded-full size-2.25`}/>
                        <h3 className="text-sm text-(--text-muted)! font-medium!">
                            {item.boardName}
                        </h3>
                    </div>
                    <p className="text-(--text-muted)! text-xs!">
                        {item.timeAgo}
                    </p>
                </div>
                <Link
                    to={`${item.boardName}/${item.id}`}
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

    const myBoardCollection = currentUser.joinedBoardNames.map(item => {
        const boardColor = boards.find(board => board.name === item)?.dotColorClass ?? "bg-grey-700"

        return (
            <NavLink 
                to={item}
                key={item}
                aria-label={`Go to ${item}`}
            >
                <div className={`${boardColor} rounded-full size-2.25`}/>
                {item}
            </NavLink>
        )
    })

    const homeBoardCollection = filteredBoards.map(item => 
        <button 
            key={item.id}
            aria-label={`Go to ${item.name}`}
            className="active:bg-(--accent-hover-light) active:border-(--border-strong) lg:hover:bg-(--accent-hover-light) lg:hover:border-(--border-strong) bg-(--surface-1) text-left flex flex-col gap-4 p-5 border border-(--border) rounded-2xl"
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <span className={`size-10 font-bold flex items-center justify-center rounded-lg ${item.colorClass}`}>{item.name.charAt(2).toUpperCase()}</span>
                    <h2>{item.name}</h2>
                </div>
                {currentUser.joinedBoardNames.includes(item.name) &&
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
        </button>
    )

    return (
        <>
            <header className="flex fiex z-10 fixed w-full justify-between items-center px-5 lg:px-10 h-(--header-height) border-b border-(--border) bg-(--surface-1)">
                <button
                    className="size-4.5 flex lg:hidden"
                    aria-label="Open mobile menu button"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Menu className="size-4.5 text-(--text-secondary)"/>
                </button>
                <h3>Yapper logo</h3>
                <div className="hidden lg:block">
                    {isLoggedIn
                        ?
                            <div className="items-center gap-3 flex">
                                <div className="text-right">
                                    <p className="font-medium text-(--text-primary)!">{currentUser.username}</p>
                                    <p className="text-xs! text-(--text-muted)!">{currentUser.karma} karma</p>
                                </div>
                                <div className="size-9 bg-black rounded-4xl" />
                            </div>
                        :
                            <div className="flex gap-3">
                                <Link 
                                    to="/"
                                    aria-label="Log into existing account"
                                    className="action-btn border-(--border)! active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)"
                                >
                                    Log in
                                </Link>
                                <Link 
                                    to="/"
                                    aria-label="Create a new account"
                                    className="action-btn bg-(--primary-btn) text-(--primary-btn-text) active:bg-(--accent) lg:hover:bg-(--accent)"
                                >
                                    Sign up
                                </Link>
                            </div>
                    }
                </div>
                <div className="size-4.5 lg:hidden" />
            </header>
            <main className="relative flex flex-1">
                <div 
                    className={`absolute transition-opacity duration-300 ease-in-out bg-black inset-0 ${isMenuOpen ? "opacity-60 z-15" : "opacity-0 -z-10"} lg:opacity-0 lg:-z-10`}
                    aria-hidden="true"
                />
                <FocusTrap 
                    active={isMenuOpen}
                    focusTrapOptions={{
                        clickOutsideDeactivates: true,
                        escapeDeactivates: true,
                        onDeactivate: () => setIsMenuOpen(false),
                    }}
                >
                    <section className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:mt-(--header-height) bg-(--surface-1) lg:block w-(--sidebar-width) z-20 lg:z-10 fixed px-5 lg:px-6 py-5 lg:py-8 border-r border-(--border) h-full`}>
                        <div className="flex justify-between lg:hidden border-b border-(--border) pb-5 mb-5">
                            {isLoggedIn
                                ?
                                    <div className="flex items-center gap-3">
                                        <div className="size-9 bg-black rounded-4xl" />
                                        <div className="">
                                            <p className="font-medium text-(--text-primary)!">{currentUser.username}</p>
                                            <p className="text-xs! text-(--text-muted)!">{currentUser.karma} karma</p>
                                        </div>
                                    </div>
                                :
                                    <h3>Yapper logo</h3>
                            }
                            <button
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <X className="size-4.5 text-(--text-secondary)"/>
                            </button>
                        </div>
                        <nav
                            className="flex flex-col gap-2"
                            aria-label="main-navigation"
                        >
                            <NavLink
                                to="/"
                                aria-label="App home - all boards"
                            >
                                <House />
                                Home
                            </NavLink>
                            {isLoggedIn &&
                                <NavLink
                                    to="/u/123"
                                    aria-label="My profile"
                                >
                                    <UserRound />
                                    My profile
                                </NavLink>
                            }
                        </nav>
                        {isLoggedIn
                            ?
                                <nav
                                    className="mt-7 flex flex-col gap-1"
                                    aria-labelledby="board-nav-label"
                                >
                                    <h4
                                        id="board-nav-label"
                                        className="text-(--text-muted)! text-(length:--font-size-xs) font-bold tracking-wider mb-1"
                                    >
                                        MY BOARDS
                                    </h4>
                                    {myBoardCollection}
                                </nav>
                            :
                                <div className="bg-(--accent) mt-5 py-3 px-4 rounded-xl">
                                    <p className="text-(--accent-text)!">
                                        Sign in to join boards, post, and track your karma.
                                    </p>
                                    <div className="flex flex-col gap-3 mt-3">
                                        <Link 
                                            to="/"
                                            aria-label="Create a new account"
                                            className="action-btn text-center bg-(--primary-btn) text-(--primary-btn-text) active:bg-(--accent) lg:hover:bg-(--accent)"
                                        >
                                            Sign up
                                        </Link>
                                        <Link 
                                            to="/"
                                            aria-label="Log into existing account"
                                            className="bg-white action-btn text-center border-(--border)! active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)"
                                        >
                                            Log in
                                        </Link>
                                    </div>
                                </div>
                        }
                    </section>
                </FocusTrap>
                <section className="flex flex-1 px-5 lg:px-10 py-5 lg:ml-(--sidebar-width) md:mr-(--recent-posts-width) mt-(--header-height)">
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
                <section className="hidden md:block fixed z-10 px-6 py-8 right-0 w-(--recent-posts-width) border-l border-(--border) h-full mt-(--header-height)">
                    <h2>Recent posts</h2>
                    <div className="flex flex-col gap-5 mt-5">
                        {recentPostsCollection}
                    </div>
                </section>
            </main>
        </>
    )
}