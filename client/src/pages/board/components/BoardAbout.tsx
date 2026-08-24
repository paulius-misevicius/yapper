import { getMonthYear, useGlobalContext } from "../../../utils/utils"
import type { BoardProps } from "../../../utils/types"

interface BoardAboutProps {
    boardInfo: BoardProps
    sidebar?: boolean
}

export default function BoardAbout({boardInfo, sidebar}: BoardAboutProps) {

    const { isLoggedIn, currentUser, setCurrentUser } = useGlobalContext()
    const isBoardJoined = currentUser?.joinedBoardNames.find(item => item === boardInfo.name) ?? false

    async function joinBoard() {
        try {
            if (isBoardJoined) {
                leaveBoard()
                return
            }

            const response = await fetch(`${import.meta.env.VITE_API_URL}/memberships`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    boardId: boardInfo.id
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error)
            }

            setCurrentUser(prev => {
                if (!prev) return prev

                return {
                    ...prev, 
                    joinedBoardNames: [...prev.joinedBoardNames, boardInfo.name]
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    async function leaveBoard() {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/memberships`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    boardId: boardInfo.id
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error)
            }

            setCurrentUser(prev => {
                if (!prev) return prev

                return {
                    ...prev, 
                    joinedBoardNames: prev.joinedBoardNames.filter(item => item !== boardInfo.name)
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className={sidebar ? "hidden md:flex md:flex-col fixed z-10 my-5 mr-5 lg:mr-10 right-0 w-(--sidebar-right-width) top-(--header-height) bottom-0 bg-(--surface-1) border border-(--border) rounded-2xl overflow-hidden shrink-0" : "mt-5 bg-(--surface-1) border border-(--border) rounded-2xl overflow-hidden md:hidden"}>
            <div 
                className="py-4 px-5 shrink-0"
                style={{backgroundColor: `rgba(${boardInfo.color}, 0.1)`}}
            >
                <span 
                    className="size-10 font-bold flex items-center justify-center rounded-lg"
                    style={{
                        backgroundColor: `rgba(${boardInfo.color}, 0.1)`,
                        color: `rgba(${boardInfo.color}, 1)`
                    }}
                >
                    {boardInfo.name.charAt(0).toUpperCase()}
                </span>
            </div>
            <div className={sidebar ? "py-4 px-5 flex-1 flex flex-col min-h-0" : "py-4 px-5"}>
                <div className="shrink-0">
                    <h2 className="font-bold">b/{boardInfo.name}</h2>
                    <p className="mt-2">{boardInfo.description}</p>
                    <div className={sidebar ? "flex items-center justify-between mt-4" : "flex items-center justify-between xs:justify-around sm:justify-evenly mt-4"}>
                        <div className="flex flex-col gap-0">
                            <p className="font-bold">{boardInfo.memberCount}</p>
                            <p className="text-xs!">Members</p>
                        </div>
                        <div className="flex flex-col gap-0">
                            <p className="font-bold">{boardInfo.postCount}</p>
                            <p className="text-xs!">Posts</p>
                        </div>
                        <div className="flex flex-col gap-0">
                            <p className="font-bold">{getMonthYear(boardInfo.createdAt, true)}</p>
                            <p className="text-xs!">Created</p>
                        </div>
                    </div>
                    {isLoggedIn &&
                        <button
                            onClick={joinBoard}
                            aria-label={isBoardJoined ? "Leave board" : "Join board"}
                            className="bg-(--primary-btn) text-(--primary-btn-text) text-sm w-full py-3 rounded-lg mt-4 font-medium active:bg-(--accent) lg:hover:bg-(--accent)"
                        >
                            {isBoardJoined
                                ?   "Leave board"
                                :   "Join board"
                            }
                        </button>
                    }
                </div>
                <div className="flex-1 flex flex-col min-h-0 mt-4">
                    <h2 className="shrink-0">Board rules</h2>
                    <ol className="text-sm flex flex-col gap-2 mt-3 flex-1 min-h-0 overflow-y-auto scrollbar-thin">
                        {boardInfo.rules?.map((item, index) => 
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