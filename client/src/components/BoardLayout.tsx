import { Outlet } from "react-router"
import { boards } from "../../data/home"
import { boardRules } from "../../data/board"
import { useParams } from "react-router"
import BoardAbout from "../pages/board/components/BoardAbout"
import NotFound from "../pages/NotFound"

import type { Board } from "../../data/home"

export interface BoardContext {
    boardInfo: Board
    board: string
    rules: string[]
}

export default function BoardLayout() {
    
    const { board } = useParams()
    
    const boardInfo = boards.find(item => item.name === `${board}`)

    if (!board || !boardInfo) {
        return <NotFound object="board" />
    }

    const rules = boardRules[board]

    return (
        <>
            <section className="flex min-w-0 flex-col flex-1 md:mr-(--sidebar-right-width) py-5 md:pr-5 lg:pr-10">
                <Outlet context={{boardInfo, board, rules}} />
            </section>
            <BoardAbout boardInfo={boardInfo} board={board} rules={rules} sidebar/>
        </>
    )
}