import { useParams } from "react-router"
import { useState, useRef } from "react"
import { currentUser, users } from "../../../data/user"
import NotFound from "../NotFound"
import { useGlobalContext } from "../../utils"
import DetailsDesktop from "./components/DetailsDesktop"
import DetailsMobile from "./components/DetailsMobile"
import PostCard from "../board/components/PostCard"
import { posts, savedPosts } from "../../../data/board"
import type { UserProfile } from "../../../data/user"

type ProfileTab = "posts" | "saved"

export interface ProfileChildProps {
    discardChanges: () => void
    previewProfilePic: (event: React.ChangeEvent<HTMLInputElement>) => void
    isEditing: boolean
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
    profilePic: string
    user: UserProfile
    bio: string
    setBio: React.Dispatch<React.SetStateAction<string>>
    profilePicRef: React.RefObject<HTMLInputElement | null>
    isCurrentUser: boolean
}

export default function Profile() {

    const { screenWidth, isLoggedIn } = useGlobalContext()
    const { username } = useParams()
    const user = users.find(item => item.username === username)
    
    if (!user) {
        return <NotFound object="user" />
    }

    const isCurrentUser = isLoggedIn && user.id === currentUser.id && user.username === currentUser.username

    const [isEditing, setIsEditing] = useState(false)
    const [openTab, setOpenTab] = useState<ProfileTab>("posts")
    const [bio, setBio] = useState(user.bio)
    const [profilePic, setProfilePic] = useState(user.profilePictureUrl)
    const profilePicRef = useRef<HTMLInputElement>(null)
    
    const userPosts = posts.filter(item => item.authorUsername === user.username)
    const savedPostIds = new Set(
        savedPosts.filter(item => item.userId === user.id).map(item => item.postId)
    )
    const userSavedPosts = posts.filter(item => savedPostIds.has(item.id))

    const arrToDisplay = openTab === "posts" ? userPosts : userSavedPosts

    const childProps = {
        discardChanges, 
        previewProfilePic,
        isEditing, 
        setIsEditing, 
        profilePic, 
        user, 
        bio, 
        setBio,
        profilePicRef,
        isCurrentUser
    }

    function previewProfilePic(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]
        
        if (!file) return

        const preview = URL.createObjectURL(file)
        setProfilePic(preview)
    }

    function discardChanges() {
        setIsEditing(false)
        setBio(user!.bio)
        setProfilePic(user!.profilePictureUrl)
        if (profilePic?.startsWith("blob:")) {
            URL.revokeObjectURL(profilePic)
        }
    }

    return (
        <div className="py-5 w-full flex flex-col">
            {screenWidth >= 640
                ?   <DetailsDesktop {...childProps} />
                :   <DetailsMobile {...childProps} />
            }
            {isCurrentUser &&
                <div className="flex gap-5 mt-5 items-center border-b border-(--border)">
                    <button
                        onClick={() => setOpenTab("posts")}
                        className={`
                            font-medium flex-1 text-sm sm:flex-[unset] text-(--text-muted) pb-1 border-b-2 border-transparent px-1
                            ${openTab === "posts" ? "text-(--text-secondary) border-(--text-secondary)!" : ""}
                        `}
                    >
                        Posts
                    </button>
                    <button
                        onClick={() => setOpenTab("saved")}
                        className={`
                            font-medium flex-1 sm:flex-[unset] text-sm text-(--text-muted) pb-1 border-b-2 border-transparent px-1
                            ${openTab === "saved" ? "text-(--text-secondary) border-(--text-secondary)!" : ""}
                        `}
                    >
                        Saved
                    </button>
                </div>
            }
            {arrToDisplay.length > 0
                ?
                    <div className="flex flex-col gap-4 mt-5">
                        {arrToDisplay.map(item =>
                            <PostCard 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                score={item.score}
                                body={item.body}
                                authorUsername={item.authorUsername}
                                createdAt={item.createdAt}
                                commentCount={item.commentCount}
                                flair={item.flair}
                                boardName={item.boardName}
                                noFlair
                                useBoardName
                            />
                        )}
                    </div>
                :
                    <div className="flex justify-center items-center grow">
                        <p className="text-(--text-muted)! font-medium">
                            {openTab === "posts" 
                                ?   "No posts to display yet!"
                                :   "Saved posts will appear here"
                            }
                        </p>
                    </div>}
        </div>
    )
}