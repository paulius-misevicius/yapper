import { useParams } from "react-router"
import { useState, useRef } from "react"
import { users } from "../../../data/user"
import NotFound from "../NotFound"
import { useGlobalContext } from "../../utils"
import DetailsDesktop from "./components/DetailsDesktop"
import DetailsMobile from "./components/DetailsMobile"

export default function Profile() {

    const { username } = useParams()
    const user = users.find(item => item.username === username)

    if (!user) {
        return <NotFound object="user" />
    }

    const { screenWidth } = useGlobalContext()
    const [isEditing, setIsEditing] = useState(false)
    const [bio, setBio] = useState(user.bio)
    const [profilePic, setProfilePic] = useState(user.profilePictureUrl)
    const profilePicRef = useRef<HTMLInputElement>(null)

    const childProps = {
        discardChanges, 
        previewProfilePic,
        isEditing, 
        setIsEditing, 
        profilePic, 
        user, 
        bio, 
        setBio,
        profilePicRef
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
        <div className="py-5 w-full">
            {screenWidth >= 640
                ?   <DetailsDesktop {...childProps} />
                :   <DetailsMobile {...childProps} />
            }
        </div>
    )
}