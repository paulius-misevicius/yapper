import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import type { RecentPostProps } from "../../utils/types.ts"
import BoardPreview from "./components/BoardPreview.tsx"
import RecentPost from "./components/RecentPost.tsx"
import { TailSpin } from "react-loader-spinner"
import { useOutletContext } from "react-router"
import type { AppLayoutContext } from "../../components/AppLayout.tsx"

export default function Home() {

    const { boards, isLoadingBoards } = useOutletContext<AppLayoutContext>()
    const [searchValue, setSearchValue] = useState("")
    const [recentPosts, setRecentPosts] = useState<RecentPostProps[]>([])
    const [isLoadingPosts, setIsLoadingPosts] = useState(false)

    useEffect(() => {
        async function getRecentPosts() {
            try {
                setIsLoadingPosts(true)

                const response = await fetch(`${import.meta.env.VITE_API_URL}/posts?sort=recent&limit=4`)
                const data = await response.json()
                setRecentPosts(data)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoadingPosts(false)
            }
        }
        getRecentPosts()
    }, [])

    const filteredBoards = searchValue !== "" 
        ?   boards.filter(item => item.name.includes(searchValue))
        :   boards

    return (
        <>
            <section className="flex flex-1 md:mr-(--sidebar-right-width) py-5">
                <div className="flex-1 flex flex-col">
                    <div className="flex flex-col xs:flex-row justify-between items-center mb-5">
                        <h1 className="whitespace-nowrap self-start mb-3 xs:mb-0">All boards</h1>
                        <div className="flex w-full xs:w-60">
                            <label htmlFor="search-boards" className="sr-only">Search boards</label>
                            <div className="relative grow">
                                <input 
                                    onChange={event => setSearchValue(event.target.value)}
                                    value={searchValue}
                                    id="search-boards" 
                                    placeholder="Enter a board name"
                                    className="w-full py-2 pl-9 pr-5"
                                />
                                <Search className="input-icon size-3.5 left-3"/>
                                {searchValue.length > 0 &&
                                    <button 
                                        className="input-icon right-3 size-4"
                                        aria-label="Clear search input"
                                        onClick={() => setSearchValue("")}
                                    >
                                        <X className="size-4"/>
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                    {isLoadingBoards ? <TailSpin wrapperClass="loader" color="var(--accent)"/> :
                        filteredBoards.length > 0
                            ?
                                <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
                                    {filteredBoards.map(item =>
                                        <BoardPreview 
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            description={item.description}
                                            color={item.color}
                                            postCount={item.postCount}
                                            memberCount={item.memberCount}
                                            createdAt={item.createdAt}
                                        />
                                    )}
                                </div>
                            :
                                <div className="flex justify-center items-center h-[calc(80%-var(--header-height))]">
                                    <p className="text-center font-medium">No boards matched your search!</p>
                                </div>
                    }
                </div>
            </section>
            <section className="hidden md:block fixed z-10 px-6 right-0 w-(--sidebar-right-width) border-l border-(--border) h-[calc(100%-var(--header-height))] py-5">
                <h2>Recent posts</h2>
                <div className="flex flex-col gap-5 mt-5 h-full">
                    {isLoadingPosts ? <TailSpin wrapperClass="loader" color="var(--accent)"/> :
                        recentPosts.map(item =>
                            <RecentPost 
                                key={item.id}
                                id={item.id}
                                color={item.color}
                                boardName={item.boardName}
                                createdAt={item.createdAt}
                                title={item.title}
                                score={item.score}
                                commentCount={item.commentCount}
                            />
                        )
                    }
                </div>
            </section>
        </>
    )
}