import { NavLink } from "react-router"
import { currentUser } from "../../data/user"
import { boards } from "../../data/home"
import { FocusTrap } from "focus-trap-react"
import { UserRound, House, X } from "lucide-react"
import { useGlobalContext } from "../utils"
import ProfilePicture from "./ProfilePicture"
import { createPortal } from "react-dom"

interface NavSidebarProps {
    isMenuOpen: boolean
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavSidebar({isMenuOpen, setIsMenuOpen}: NavSidebarProps) {

    const { isLoggedIn, setAuthType, screenWidth } = useGlobalContext()
    const myBoardCollection = currentUser.joinedBoardNames.map(item => {
        const boardColor = boards.find(board => board.name === item)?.dotColorClass ?? "bg-grey-700"
        
        return (
            <NavLink 
                to={`b/${item}`}
                onClick={screenWidth < 1024 
                    ? () => setIsMenuOpen(false) 
                    : () => {}
                }
                key={item}
                aria-label={`Go to b/${item}`}
            >
                <div className={`${boardColor} rounded-full size-2.25`}/>
                b/{item}
            </NavLink>
        )
    })
    const rootPortal = document.getElementById("portal")

    if (!rootPortal) return

    if (screenWidth >= 1024) return (
        <section className="mt-(--header-height) bg-(--surface-1) hidden lg:block w-(--sidebar-nav-width) z-10 fixed px-6 py-8 border-r border-(--border) h-full">
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
                            <button 
                                onClick={() => setAuthType("sign-up")}
                                aria-label="Create a new account"
                                className="action-btn text-center bg-(--primary-btn) text-(--primary-btn-text) active:bg-(--accent) lg:hover:bg-(--accent)"
                            >
                                Sign up
                            </button>
                            <button 
                                onClick={() => setAuthType("log-in")}
                                aria-label="Log into existing account"
                                className="bg-white action-btn text-center border-(--border)! active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)"
                            >
                                Log in
                            </button>
                        </div>
                    </div>
            }
        </section>
    )

    if (screenWidth < 1024 && isMenuOpen) return createPortal(
        <>
            <div 
                onClick={() => setIsMenuOpen(false)}
                className={`fixed bg-black/60 inset-0 z-50`}
                aria-hidden="true"
            />
            <FocusTrap 
                active={isMenuOpen}
                focusTrapOptions={{
                    clickOutsideDeactivates: true,
                    escapeDeactivates: true
                }}
            >
                <section className="bg-(--surface-1) w-(--sidebar-nav-width) z-100 fixed top-0 px-5 py-5 border-r border-(--border) h-full">
                    <div className="flex justify-between border-b border-(--border) pb-5 mb-5">
                        {isLoggedIn
                            ?
                                <div className="flex items-center gap-3">
                                    <ProfilePicture size="size-11" />
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
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="App home - all boards"
                        >
                            <House />
                            Home
                        </NavLink>
                        {isLoggedIn &&
                            <NavLink
                                to="/u/123"
                                onClick={() => setIsMenuOpen(false)}
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
                                    <button 
                                        onClick={() => setAuthType("sign-up")}
                                        aria-label="Create a new account"
                                        className="action-btn text-center bg-(--primary-btn) text-(--primary-btn-text) active:bg-(--accent)"
                                    >
                                        Sign up
                                    </button>
                                    <button 
                                        onClick={() => setAuthType("log-in")}
                                        aria-label="Log into existing account"
                                        className="bg-white action-btn text-center border-(--border)! active:bg-(--accent-hover)"
                                    >
                                        Log in
                                    </button>
                                </div>
                            </div>
                    }
                </section>
            </FocusTrap>
        </>,
        rootPortal
    )
}