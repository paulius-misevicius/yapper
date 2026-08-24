import { useState, useEffect } from "react"
import Header from "./Header"
import NavSidebar from "./NavSidebar"
import { Outlet, ScrollRestoration } from "react-router"
import AuthModal from "./AuthModal"
import { useGlobalContext } from "../utils/utils"
import type { BoardProps } from "../utils/types"

export interface AppLayoutContext {
    boards: BoardProps[]
    isLoadingBoards: boolean
}

export default function AppLayout() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { authType } = useGlobalContext()
    const [boards, setBoards] = useState<BoardProps[]>([])
    const [isLoadingBoards, setIsLoadingBoards] = useState(true)

    useEffect(() => {
        async function getBoardPreviews() {
            try {

                const response = await fetch(`${import.meta.env.VITE_API_URL}/boards`)
                const data = await response.json()
                setBoards(data)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoadingBoards(false)
            }
        }
        getBoardPreviews()
    })

    useEffect(() => {
        if (isMenuOpen || authType) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen, authType])

    return (
        <>
            {authType && 
                <AuthModal />
            }
            <Header setIsMenuOpen={setIsMenuOpen}/>
            <NavSidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} boards={boards} />
            <main className="relative mt-(--header-height) flex flex-1 lg:ml-(--sidebar-nav-width) px-5 lg:px-10">
                <Outlet context={{boards, isLoadingBoards}}/>
                <ScrollRestoration 
                    getKey={location => location.pathname}
                />
            </main>
        </>
    )
}