import { HatGlasses } from "lucide-react"
import { currentUser } from "../../data/user"
import ImageLoader from "./ImageLoader"

interface ProfilePictureProps {
    size?: string
    userSrc?: string
}

export default function ProfilePicture({size = "size-11", userSrc}: ProfilePictureProps) {

    return (
        <div className={`${size} rounded-full overflow-hidden border border-(--border) shrink-0`}>
            {currentUser.profilePictureUrl && currentUser.profilePictureUrl.length > 0
                ?   
                    <ImageLoader 
                        src={userSrc ? userSrc : currentUser.profilePictureUrl} 
                        alt={userSrc ? "User profile picture" : `${currentUser.username} profile picture`}
                    />
                :   
                    <div className="relative bg-(--surface-2) w-full h-full">
                        <HatGlasses className="absolute top-[50%] left-[50%] -translate-1/2 text-(--text-muted) size-3/6"/>
                    </div>
            }
        </div>
    )
}