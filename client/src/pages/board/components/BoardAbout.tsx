import { currentUser } from "../../../../data/user"
import { useGlobalContext } from "../../../utils"
import type { Board } from "../../../../data/home"

interface BoardAboutProps {
    boardInfo: Board | undefined
    board: string | undefined
    rules: string[]
    sidebar?: boolean
}

export default function BoardAbout({boardInfo, board, rules, sidebar}: BoardAboutProps) {

    const { isLoggedIn } = useGlobalContext()

    return (
        <section className={sidebar ? "hidden md:flex md:flex-col fixed z-10 my-5 mr-5 lg:mr-10 right-0 w-(--sidebar-right-width) top-(--header-height) bottom-0 bg-(--surface-1) border border-(--border) rounded-2xl overflow-hidden shrink-0" : "mt-5 bg-(--surface-1) border border-(--border) rounded-2xl overflow-hidden md:hidden"}>
            <div className="bg-(--accent) py-4 px-5 shrink-0">
                <span className={`size-10 font-bold flex items-center justify-center rounded-lg ${boardInfo?.colorClass}`}>
                    {board?.charAt(0).toUpperCase()}
                </span>
            </div>
            <div className={sidebar ? "py-4 px-5 flex-1 flex flex-col min-h-0" : "py-4 px-5"}>
                <div className="shrink-0">
                    <h2 className="font-bold">b/{boardInfo?.name}</h2>
                    <p className="mt-2">{boardInfo?.description}</p>
                    <div className={sidebar ? "flex items-center justify-between mt-4" : "flex items-center justify-between xs:justify-around sm:justify-evenly mt-4"}>
                        <div className="flex flex-col gap-0">
                            <p className="font-bold">{boardInfo?.memberCount}</p>
                            <p className="text-xs!">Members</p>
                        </div>
                        <div className="flex flex-col gap-0">
                            <p className="font-bold">{boardInfo?.postCount}</p>
                            <p className="text-xs!">Posts</p>
                        </div>
                        <div className="flex flex-col gap-0">
                            <p className="font-bold">{boardInfo?.createdAt}</p>
                            <p className="text-xs!">Created</p>
                        </div>
                    </div>
                    {isLoggedIn &&
                        <button
                            className="bg-(--primary-btn) text-(--primary-btn-text) text-sm w-full py-3 rounded-lg mt-4 font-medium active:bg-(--accent) lg:hover:bg-(--accent)"
                        >
                            {isLoggedIn && currentUser.joinedBoardNames.find(item => item === boardInfo?.name)
                                ?   "Leave board"
                                :   "Join board"
                            }
                        </button>
                    }
                </div>
                <div className="flex-1 flex flex-col min-h-0 mt-4">
                    <h2 className="shrink-0">Board rules</h2>
                    <ol className="text-sm flex flex-col gap-2 mt-3 flex-1 min-h-0 overflow-y-auto scrollbar-thin">
                        {rules.map((item, index) => 
                            <li key={index} className="flex">
                                <span className="font-medium mr-4 text-(--text-muted)!">
                                    {index + 1}.
                                </span>
                                <p>{item}</p>
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        </section>
    )
}