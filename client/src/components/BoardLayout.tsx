import { Outlet } from "react-router"
import { boards, boardRules } from "../../data"
import { useParams } from "react-router"
import BoardSidebar from "./BoardSidebar"

export default function BoardLayout() {
    
    const { board } = useParams()
    
    if (!board) return

    const boardInfo = boards.find(item => item.name === `b/${board}`)
    const rules = boardRules[board]

    return (
        <>
            <section className="flex min-w-0 flex-col flex-1 md:mr-(--sidebar-right-width) py-5 md:pr-5 lg:pr-10">
                <Outlet context={{boardInfo: boardInfo, board: board}} />
            </section>
            <BoardSidebar boardInfo={boardInfo} board={board} rules={rules}/>
        </>
    )
}