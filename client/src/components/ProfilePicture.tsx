import { HatGlasses } from "lucide-react"
import ImageLoader from "./ImageLoader"

interface ProfilePictureProps {
    size?: string
    userSrc?: string
}

export default function ProfilePicture({size = "size-11", userSrc}: ProfilePictureProps) {
    
    return (
        <div className={`${size} rounded-full overflow-hidden border border-(--border) shrink-0`}>
            {userSrc && userSrc.length > 0
                ?   
                    <ImageLoader 
                        src={userSrc} 
                        alt="User profile picture"
                    />
                :   
                    <div className="relative bg-(--surface-2) w-full h-full">
                        <HatGlasses className="absolute top-[50%] left-[50%] -translate-1/2 text-(--text-muted) size-3/6"/>
                    </div>
            }
        </div>
    )
}