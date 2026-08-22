import { currentUser } from "../../data/user"
import { useGlobalContext } from "../utils"
import { Menu, Settings, UserRound, LogOut, ChevronDown } from "lucide-react"
import ProfilePicture from "./ProfilePicture"
import { Link } from "react-router"
import { useState, useEffect, useRef } from "react"
import logo from "../assets/yapper-logo.svg"

interface HeaderProps {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({setIsMenuOpen}: HeaderProps) {

    const { isLoggedIn, setAuthType } = useGlobalContext()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLInputElement>(null)
    const dropdownToggleRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                dropdownToggleRef.current && !dropdownToggleRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false)
            }
        }

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isDropdownOpen])

    return (
        <header className="flex overflow-hidden fiex z-20 fixed w-full justify-between items-center px-5 lg:px-10 h-(--header-height) border-b border-(--border) bg-(--surface-1)">
            <button
                className="size-4.5 flex lg:hidden"
                aria-label="Open mobile menu button"
                onClick={() => setIsMenuOpen(true)}
            >
                <Menu className="size-4.5 text-(--text-secondary)"/>
            </button>
            <Link
                to="/"
            >
                <img
                    className="size-18"
                    src={logo}
                    alt="Yapper logo"
                />
            </Link>
            <div className="hidden lg:block">
                {isLoggedIn
                    ?
                        <div className="relative">
                            <button
                                ref={dropdownToggleRef}
                                aria-expanded={isDropdownOpen}
                                aria-label={`${isDropdownOpen ? "Close" : "Open"} dropdown menu`}
                                onClick={() => setIsDropdownOpen(prev => !prev)}
                                className="items-center gap-3 flex group"
                            >
                                <ChevronDown 
                                    className={`
                                        size-4 text-(--text-muted) transition-transform duration-100 ease-in-out group-hover:text-(--text-secondary)
                                        ${isDropdownOpen ? "rotate-180" : ""}
                                    `}
                                />
                                <div className="text-right">
                                    <p className="font-medium text-(--text-primary)!">{currentUser.username}</p>
                                    <p className="text-xs! text-(--text-muted)!">{currentUser.karma} karma</p>
                                </div>
                                <div className="relative">
                                    <ProfilePicture size="size-11" />
                                    <div className="absolute inset-0 bg-black rounded-full opacity-0 transition-all duration-100 ease-in-out group-hover:opacity-25"/>
                                </div>
                            </button>
                            {isDropdownOpen &&
                                <div 
                                    ref={dropdownRef}
                                    className="absolute -translate-1/2 left-1/2 top-34.75 flex flex-col gap-3 bg-(--surface-1) px-3 py-3 border border-(--border) rounded-lg z-20"
                                >
                                    <div className="flex w-36 flex-col gap-2 border-b border-(--border) pb-3">
                                        <Link
                                            onClick={() => setIsDropdownOpen(false)}
                                            aria-label="My profile"
                                            className="flex items-center gap-3 rounded-md px-5 py-2 text-(--text-secondary) text-sm font-medium lg:hover:bg-(--accent-hover)"
                                            to={`/u/${currentUser.username}`}
                                        >
                                            <UserRound className="size-4.5"/>
                                            My profile
                                        </Link>
                                        <Link
                                            onClick={() => setIsDropdownOpen(false)}
                                            aria-label="Account settings"
                                            className="flex items-center gap-3 rounded-md px-5 py-2 text-(--text-secondary) text-sm font-medium lg:hover:bg-(--accent-hover)"
                                            to="/settings"
                                        >
                                            <Settings className="size-4.5"/>
                                            Settings
                                        </Link>
                                    </div>
                                    <button
                                        aria-label="Log out from account"
                                        className="flex items-center gap-3 px-5 rounded-md py-2 text-(--text-secondary) text-sm font-medium text-left lg:hover:bg-(--failure)"
                                    >
                                        <LogOut className="size-4.5"/>
                                        Log out
                                    </button>
                                </div>
                            }
                        </div>
                    :
                        <div className="flex gap-3">
                            <button 
                                onClick={() => setAuthType("log-in")}
                                aria-label="Log into existing account"
                                className="action-btn text-(--text-secondary) border-(--border)! active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)"
                            >
                                Log in
                            </button>
                            <button 
                                onClick={() => setAuthType("sign-up")}
                                aria-label="Create a new account"
                                className="action-btn bg-(--primary-btn) text-(--primary-btn-text) active:bg-(--accent) lg:hover:bg-(--accent)"
                            >
                                Sign up
                            </button>
                        </div>
                }
            </div>
            <div className="size-4.5 lg:hidden" />
        </header>
    )
}