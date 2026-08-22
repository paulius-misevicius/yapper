import { Outlet } from "react-router"
import { useParams } from "react-router"
import BoardAbout from "../pages/board/components/BoardAbout"
import NotFound from "../pages/NotFound"
import type { BoardProps } from "../types"
import { useEffect, useState } from "react"
import { TailSpin } from "react-loader-spinner"

export default function BoardLayout() {
    
    const { board } = useParams()
    const [boardInfo, setBoardInfo] = useState<BoardProps>()
    const [isBoardInfoLoading, setIsBoardInfoLoading] = useState(true)
    
    useEffect(() => {
        async function getBoardInfo() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/boards/${board}`)

                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.error)
                }

                const data = await response.json()
                setBoardInfo(data)
            } catch (error) {
                console.error(error)
                setBoardInfo(undefined)
            } finally {
                setIsBoardInfoLoading(false)
            }
        }
        getBoardInfo()
    }, [board])

    if (isBoardInfoLoading) {
        return <TailSpin wrapperClass="loader" color="var(--accent)"/>
    }

    if (!boardInfo) {
        return <NotFound object="board" />
    }

    return (
        <>
            <section className="flex min-w-0 flex-col flex-1 md:mr-(--sidebar-right-width) py-5 md:pr-5 lg:pr-10">
                <Outlet context={{boardInfo, isBoardInfoLoading}} />
            </section>
            <BoardAbout boardInfo={boardInfo} sidebar/>
        </>
    )
}