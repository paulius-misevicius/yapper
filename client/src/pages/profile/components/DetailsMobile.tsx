import MobileShelfModal from "../../../components/MobileShelfModal"
import { getMonthYear } from "../../../utils/utils"
import ProfilePicture from "../../../components/ProfilePicture"
import { Camera, Triangle } from "lucide-react"
import type { ProfileChildProps } from "../Profile"

export default function DetailsMobile({
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
}: ProfileChildProps) {
    return (
        <>
            {isEditing && isCurrentUser &&
                <MobileShelfModal
                    onClose={discardChanges}
                    title="Edit profile"
                >
                    <div className="flex flex-col items-center w-full">
                        <div className="mb-1">
                            <label className="sr-only" htmlFor="profile-picture">Profile picture</label>
                            <input
                                ref={profilePicRef}
                                onChange={previewProfilePic}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id="profile-picture"
                            />
                            <button
                                className="relative text-(--primary-btn-text) group"
                                type="button"
                                onClick={() => profilePicRef.current?.click()}
                            >
                                <ProfilePicture size="size-21" userSrc={profilePic} />
                                <div className="absolute inset-0 bg-black rounded-full opacity-0 group-active:opacity-50 group-hover:opacity-50 transition-all duration-100 ease-in-out"/>
                                <Camera className="size-8 rounded-full p-1.5 absolute bottom-0 right-0 bg-(--primary-btn)"/>
                            </button>
                        </div>
                        <h2 className="text-[clamp(1.375rem,6vw,1.5rem)]">
                            {user.username}
                        </h2>
                        <div className="mt-5 w-full">
                            <label className="sr-only" htmlFor="profile-bio">
                                Profile bio
                            </label>
                            <textarea 
                                value={bio}
                                onChange={event => setBio(event.target.value)}
                                id="profile-bio"
                                placeholder="Write something interesting about yourself..."
                                rows={5}
                                className="bg-(--surface-1) min-h-30 max-h-80 px-3 py-2 rounded-md border border-(--border) w-full"
                            />
                        </div>
                        <button
                            aria-label="Save changes"
                            className="w-full mt-3 py-3! action-btn bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent)"
                        >
                            Save changes
                        </button>
                    </div>
                </MobileShelfModal>
            }
            <div className="flex gap-8 bg-(--surface-1) p-5 border border-(--border) rounded-2xl">
                <div className="w-full min-w-0">
                    <div className="flex items-center justify-between">
                        <div className="flex min-w-0 flex-col justify-center w-full items-center">
                            <div className="mb-1">
                                <ProfilePicture size="size-19" userSrc={user.profilePictureUrl} />
                            </div>
                            <h1
                                className="truncate"
                            >
                                {user.username}
                            </h1>
                            <p
                                className={
                                    `flex whitespace-nowrap mt-3 items-center rounded-md gap-1 py-1 px-3 font-medium text-xs!
                                    ${user.karma >= 0 ? "bg-(--accent) text-(--accent-text)!" : "bg-(--failure) text-(--failure-text)!"}`
                                }
                            >
                                <Triangle
                                    className={`${user.karma >= 0 ? "" : "triangle-down"} size-3.5`}
                                />
                                {user.karma} karma
                            </p>
                        </div>
                    </div>
                    <p className="mt-2 text-(--text-muted)! text-center">
                        Joined {getMonthYear(user.joinedAt)}
                    </p>
                    <p className="mt-3">
                        {user.bio}
                    </p>
                    {isCurrentUser &&
                        <button 
                            onClick={() => setIsEditing(true)}
                            aria-label="Edit profile"
                            className="w-full mt-5 whitespace-nowrap text-(--text-secondary) action-btn text-center border-(--border)! active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)"
                        >
                            Edit profile
                        </button>
                    }
                    <div className="mt-5 flex items-center justify-around">
                        <p className="text-(--text-muted)! items-center flex flex-col">
                            <span className="font-bold text-lg! text-(--text-secondary)">{user.postCount}</span>
                            Posts
                        </p>
                        <p className="text-(--text-muted)! items-center flex flex-col">
                            <span className="font-bold text-lg! text-(--text-secondary)">{user.commentCount}</span>
                            Comments
                        </p>
                        <p className="text-(--text-muted)! items-center flex flex-col">
                            <span className="font-bold text-lg! text-(--text-secondary)">{user.joinedBoardCount}</span>
                            Boards
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}