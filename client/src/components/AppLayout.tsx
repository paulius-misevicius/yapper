import { useState } from "react"
import Header from "./Header"
import NavSidebar from "./NavSidebar"
import { Outlet } from "react-router"

export default function AppLayout() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <Header setIsMenuOpen={setIsMenuOpen}/>
            <NavSidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main className="relative mt-(--header-height) flex flex-1 lg:ml-(--sidebar-nav-width) px-5 lg:px-10">
                <Outlet />
            </main>
        </>
    )
}