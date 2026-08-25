import { getMonthYear } from "../../../utils/utils"
import ProfilePicture from "../../../components/ProfilePicture"
import { 
    // Camera, 
    Triangle 
} from "lucide-react"
import type { ProfileChildProps } from "../Profile"
import { TailSpin } from "react-loader-spinner"

export default function DetailsDesktop({
    discardChanges, 
    // previewProfilePic,
    // profilePic, 
    // profilePicRef, 
    isEditing, 
    setIsEditing, 
    user, 
    bio, 
    setBio,
    isCurrentUser,
    isUpdating,
    updateProfile,
    error,
    setError
}: ProfileChildProps) {
    return (
        <div className="flex gap-8 bg-(--surface-1) px-8 py-6 border border-(--border) rounded-2xl">
            {/* Decide if profile pics or avatars
            {isEditing
                ?
                    <div>
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
                            <ProfilePicture size="size-23" userSrc={profilePic} />
                            <div className="absolute inset-0 bg-black rounded-full opacity-0 group-active:opacity-50 group-hover:opacity-50 transition-all duration-100 ease-in-out"/>
                            <Camera className="size-8 rounded-full p-1.5 absolute bottom-0 right-0 bg-(--primary-btn)"/>
                        </button>
                    </div>
                : */}
                    <div>
                        <ProfilePicture size="size-23" userSrc={user.profilePictureUrl} />
                    </div>
            {/* } */}
            <div className="w-full min-w-0">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex min-w-0 w-full items-center gap-4">
                        <h1
                            className="truncate"
                        >
                            {user.username}
                        </h1>
                        <p
                            className={
                                `flex whitespace-nowrap items-center rounded-md gap-1 py-1 px-3 font-medium text-xs!
                                ${user.karma >= 0 ? "bg-(--accent) text-(--accent-text)!" : "bg-(--failure) text-(--failure-text)!"}`
                            }
                        >
                            <Triangle
                                className={`${user.karma >= 0 ? "" : "triangle-down"} size-3.5`}
                            />
                            {user.karma} karma
                        </p>
                    </div>
                    {isEditing && isCurrentUser
                        ?
                            <div className="flex gap-2 items-center">
                                {error &&
                                    <p
                                        role="alert"
                                        className="error text-xs! mr-1 text-nowrap"
                                    >
                                        {error}
                                    </p>
                                }
                                <button
                                    onClick={discardChanges}
                                    aria-label="Discard changes"
                                    className="bg-white text-(--text-muted) action-btn text-center border-(--border)! active:bg-(--accent-hover) lg:hover:bg-(--accent-hover) text-xs!"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={updateProfile}
                                    aria-label="Save changes"
                                    className="w-fit action-btn bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent) text-xs!"
                                >
                                    {isUpdating 
                                        ?   <TailSpin wrapperClass="loader" color="var(--primary-btn-text)" height="15.5" width="15.5"/>
                                        :   "Save"
                                    }
                                </button>
                            </div>
                        :
                            isCurrentUser &&
                                <button 
                                    onClick={() => setIsEditing(true)}
                                    aria-label="Edit profile"
                                    className="whitespace-nowrap text-(--text-secondary) action-btn text-center border-(--border)! active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)"
                                >
                                    Edit profile
                                </button>
                    }
                </div>
                <p className="text-(--text-muted)! mt-0.5">
                    Joined {getMonthYear(user.joinedAt)}
                </p>
                {isEditing && isCurrentUser
                    ?
                        <div className="mt-3">
                            <label className="sr-only" htmlFor="profile-bio">
                                Profile bio
                            </label>
                            <textarea 
                                value={bio}
                                onChange={event => {
                                    setBio(event.target.value)
                                    setError(null)
                                }}
                                id="profile-bio"
                                placeholder="Write something interesting about yourself..."
                                rows={3}
                                className="bg-(--surface-1) min-h-20 max-h-30 px-3 py-2 rounded-md border border-(--border) w-full max-w-160"
                            />
                        </div>
                    :
                        <p className="mt-3 max-w-160">
                            {user.bio}
                        </p>
                }
                <div className="mt-4 flex items-center gap-12">
                    <p className="text-(--text-muted)! flex flex-col">
                        <span className="font-bold text-lg! text-(--text-secondary)">{user.postCount}</span>
                        Posts
                    </p>
                    <p className="text-(--text-muted)! flex flex-col">
                        <span className="font-bold text-lg! text-(--text-secondary)">{user.commentCount}</span>
                        Comments
                    </p>
                    <p className="flex text-(--text-muted)! flex-col">
                        <span className="font-bold text-lg! text-(--text-secondary)">{user.joinedBoardCount}</span>
                        Boards joined
                    </p>
                </div>
            </div>
        </div>
    )
}