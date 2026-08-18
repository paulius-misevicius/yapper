import { currentUser } from "../../data/user"
import { useGlobalContext } from "../utils"
import { Menu } from "lucide-react"
import ProfilePicture from "./ProfilePicture"

interface HeaderProps {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({setIsMenuOpen}: HeaderProps) {

    const { isLoggedIn, setAuthType } = useGlobalContext()

    return (
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
                            <ProfilePicture size="size-11" />
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