import { useState, useEffect } from "react"
import Header from "./Header"
import NavSidebar from "./NavSidebar"
import { Outlet, ScrollRestoration } from "react-router"

export default function AppLayout() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen])

    return (
        <>
            <Header setIsMenuOpen={setIsMenuOpen}/>
            <NavSidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main className="relative mt-(--header-height) flex flex-1 lg:ml-(--sidebar-nav-width) px-5 lg:px-10">
                <Outlet />
                <ScrollRestoration 
                    getKey={location => location.pathname}
                />
            </main>
        </>
    )
}