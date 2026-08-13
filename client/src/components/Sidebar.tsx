import { NavLink, Link } from "react-router"
import { currentUser, boards } from "../../data"
import { FocusTrap } from "focus-trap-react"
import { UserRound, House, X } from "lucide-react"
import { useGlobalContext } from "../utils"

interface SidebarProps {
    isMenuOpen: boolean
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar({isMenuOpen, setIsMenuOpen}: SidebarProps) {

    const { isLoggedIn } = useGlobalContext()

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

    return (
        <>
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
        </>
    )
}