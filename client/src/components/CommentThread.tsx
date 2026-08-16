import type { CommentWithReplies } from "../pages/Post"
import { getTimeAgo } from "../utils"
import { useState, useEffect } from "react"
import { Triangle, MessageSquare, Minus, Plus, MoveRight } from "lucide-react"
import ProfilePicture from "./ProfilePicture"
import { users } from "../../data/user"

interface CommentThreadProps extends CommentWithReplies {
    depth?: number
    setIsNested: React.Dispatch<React.SetStateAction<boolean>>
    setCommentTree: React.Dispatch<React.SetStateAction<CommentWithReplies[]>>
}

export default function CommentThread({ id, postId, parentCommentId, authorUsername, createdAt, score, body, replies, setCommentTree, setIsNested, depth = 0 }: CommentThreadProps) {

    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth > 768)
        }
        
        window.addEventListener("resize", handleResize)
        
        return () => window.removeEventListener("resize", handleResize)
    }, [])
        
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)
    const [isThreadOpen, setIsThreadOpen] = useState<boolean>(depth === 0 || (depth < 4 && score > 4))
    const user = users.find(item => item.username === authorUsername)

    const maxNestDepth = isDesktop ? 5 : 4
    const nest = depth < maxNestDepth
        ?   replies.length > 0 && 
                replies.map(item =>
                    <CommentThread
                        key={item.id}
                        id={item.id}
                        postId={item.postId}
                        parentCommentId={item.parentCommentId}
                        authorUsername={item.authorUsername}
                        createdAt={item.createdAt}
                        score={item.score}
                        body={item.body}
                        replies={item.replies}
                        depth={depth + 1}
                        setCommentTree={setCommentTree}
                        setIsNested={setIsNested}
                    />
                )
        :   replies.length > 0 &&    
                <div className={`flex my-3`}>
                    <div className="border-l border-(--border-strong) pr-4"/>
                    <button 
                        onClick={() => {
                            setCommentTree([
                                { 
                                    id,
                                    postId,
                                    parentCommentId,
                                    authorUsername,
                                    createdAt,
                                    score,
                                    body,
                                    replies
                                }
                            ])
                            setIsNested(true)
                    }}
                        aria-label={`Continue thread and open comment of ${authorUsername}`}
                        className="flex items-center gap-2 text-sm text-(--text-muted) underline underline-offset-2"
                    >
                        Continue thread
                        <MoveRight className="size-4" />
                    </button>
                </div>
        

    if (isDesktop) return (
        <details 
            open={isThreadOpen} 
            onToggle={event => setIsThreadOpen(event.currentTarget.open)}
            className={`flex flex-col ${depth > 0 ? "mt-4" : ""}`}
        >
            <summary 
                className="grid items-center gap-3 grid-cols-[24px_minmax(0,1fr)] xs:grid-cols-[32px_minmax(0,1fr)]">
                {isThreadOpen
                    ?   
                        <ProfilePicture size="w-full aspect-square" userSrc={user?.profilePictureUrl} />
                    :   
                        <button 
                            onClick={event => {
                                event.preventDefault()
                                event.stopPropagation()
                                setIsThreadOpen(true)
                            }}
                            aria-label={`${isThreadOpen ? "Close" : "Open"} thread created by ${authorUsername} ${getTimeAgo(createdAt)}`}
                            className="relative size-4 text-(--text-secondary) justify-self-center border-2 border-(--border-strong) rounded-full flex justify-center items-center"
                        >
                            <Plus className="-translate-1/2 top-1/2 left-1/2 size-3/4 stroke-[2.75] absolute"/>
                        </button>
                }
                <div className="flex gap-3 items-center">
                    <p className="font-medium">
                        {authorUsername}
                    </p>
                    <p className="text-xs! text-(--text-muted)!">
                        {getTimeAgo(createdAt)}
                    </p>
                </div>
            </summary>
            <div className="grid items-center grid-cols-[24px_1fr] xs:grid-cols-[32px_1fr] gap-x-3">
                {replies.length > 0
                    ?   <div className="border-l border-(--border) h-full justify-self-center"/>
                    :   <div />
                }
                <p className="mb-2 text-wrap">{body}</p>
                {replies.length > 0
                    ?
                        <button 
                            onClick={event => {
                                event.preventDefault()
                                event.stopPropagation()
                                setIsThreadOpen(false)
                            }}
                            aria-label={`${isThreadOpen ? "Close" : "Open"} thread created by ${authorUsername} ${getTimeAgo(createdAt)}`}
                            className="relative size-4 text-(--text-secondary) justify-self-center border-2 border-(--border-strong) rounded-full flex justify-center items-center"
                        >
                            <Minus className="-translate-1/2 top-1/2 left-1/2 size-3/4 stroke-[2.75] absolute"/>
                        </button>
                    :   
                        <div />
                }
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => console.log("Downvoted")}
                            aria-label={`Upvote comment`}
                            className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                        >
                            <Triangle className="size-3.5"/>
                        </button>
                        <p className="text-xs! text-(--text-muted)!">
                            {score}
                        </p>
                        <button
                            onClick={() => console.log("Downvoted")}
                            aria-label={`Downvote comment`}
                            className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                        >
                            <Triangle className="size-3.5 triangle-down"/>
                        </button>
                    </div>
                    <button
                        className="flex items-center text-(--text-muted) text-xs gap-2"
                    >
                        <MessageSquare className="size-3.5"/>
                        Reply
                    </button>
                </div>
                <div />
                <div>
                    {nest}
                </div>
            </div>
        </details>
    )

    if (!isDesktop) return (
        <div className={`flex my-2`}>
            { depth > 0 &&
                <div className="border-l border-(--border-strong) pr-4"/>
            }
            <details
                open={isThreadOpen}
                onToggle={event => setIsThreadOpen(event.currentTarget.open)}
                className="flex flex-col grow"
            >
                <summary
                    className="flex items-center gap-3"
                >
                    <ProfilePicture size="size-6.5 aspect-square" userSrc={user?.profilePictureUrl} />
                    <p className="font-medium">
                        {authorUsername}
                    </p>
                    <p className="text-xs! text-(--text-muted)!">
                        {getTimeAgo(createdAt)}
                    </p>
                </summary>
                <p className="mt-1 mb-2 text-wrap">{body}</p>
                <div className="flex items-center gap-4 justify-end">
                    <button
                        className="flex items-center text-(--text-muted) text-xs gap-2"
                    >
                        <MessageSquare className="size-3.5"/>
                        Reply
                    </button>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => console.log("Downvoted")}
                            aria-label={`Upvote comment`}
                            className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                        >
                            <Triangle className="size-3.5"/>
                        </button>
                        <p className="text-xs! text-(--text-muted)!">
                            {score}
                        </p>
                        <button
                            onClick={() => console.log("Downvoted")}
                            aria-label={`Downvote comment`}
                            className="text-(--text-muted) active:text-(--text-primary) lg:hover:text-(--text-primary)"
                        >
                            <Triangle className="size-3.5 triangle-down"/>
                        </button>
                    </div>
                </div>
                <div>
                    {nest}
                </div>
            </details>
        </div>
    )

}