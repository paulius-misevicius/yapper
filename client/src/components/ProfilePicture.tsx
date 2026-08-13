import { HatGlasses } from "lucide-react"
import { currentUser } from "../../data"
import ImageLoader from "./ImageLoader"

interface ProfilePictureProps {
    size: string
}

export default function ProfilePicture({size = "size-11"}: ProfilePictureProps) {

    return (
        <div className={`${size} rounded-full overflow-hidden border border-(--border)`}>
            {currentUser.profilePictureUrl && currentUser.profilePictureUrl.length > 0
                ?   
                    <ImageLoader src={currentUser.profilePictureUrl} alt={`${currentUser.username} profile picture`}/>
                :   
                    <div className="relative w-full h-full">
                        <HatGlasses className="absolute top-[50%] left-[50%] -translate-1/2 text-(--text-muted) size-3/6"/>
                    </div>
            }
        </div>
    )
}