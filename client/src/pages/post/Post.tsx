import { useOutletContext, useParams } from "react-router"
import { MoveLeft } from "lucide-react"
import type { Sort } from "../../types"
import { useEffect, useState } from "react"
import CommentThread from "./components/CommentThread"
import PostBody from "./components/PostBody"
import CommentBox from "./components/CommentBox"
import CommentSort from "./components/CommentSort"
import NotFound from "../NotFound"
import { useGlobalContext } from "../../utils"
import type { CommentProps, PostProps } from "../../types"
import type { BoardContext } from "../../components/BoardLayout"
import { TailSpin } from "react-loader-spinner"

export interface CommentWithReplies extends CommentProps {
    replies: CommentWithReplies[]
    postId: number
    profilePictureUrl: string
}

export default function Post() {

    const postId = Number(useParams().postId)
    const { boardInfo } = useOutletContext<BoardContext>()
    const [isLoadingPost, setIsLoadingPost] = useState(false)
    const [isLoadingComments, setIsLoadingComments] = useState(false)
    const [post, setPost] = useState<PostProps>()
    const [isCommentBoxActive, setIsCommentBoxActive] = useState(false)
    const [sort, setSort] = useState<Sort>("top")
    const [commentTree, setCommentTree] = useState<CommentWithReplies[]>([])
    const [isNested, setIsNested] = useState(false)
    const [reset, setReset] = useState(0)
    const [replyBoxId, setReplyBoxId] = useState<number>(0)
    const [newComment, setNewComment] = useState("")
    const { screenWidth } = useGlobalContext()

    useEffect(() => {
        async function getPost() {
            try {
                setIsLoadingPost(true)

                const response = await fetch(`${import.meta.env.VITE_API_URL}/boards/${boardInfo.name}/${postId}`)

                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.error)
                }

                const data = await response.json()
                setPost(data)
            } catch (error) {
                console.error(error)
                setPost(undefined)
            } finally {
                setIsLoadingPost(false)
            }
        }
        getPost()
    }, [])

    useEffect(() => {
        async function getPostComments() {
            try {
                setIsLoadingComments(true)

                const response = await fetch(`${import.meta.env.VITE_API_URL}/comments/${postId}`)
                const comments: CommentWithReplies[] = await response.json()

                const map = new Map<number, CommentWithReplies>()
                comments.forEach(item => map.set(item.id, {...item, replies: []}))
                
                const rootComments: CommentWithReplies[] = []
            
                comments.forEach(item => {
                    const comment = map.get(item.id)
            
                    if (!comment) {
                        return
                    } else if (item.parentCommentId === null) {
                        rootComments.push(comment)
                    } else {
                        const parent = map.get(item.parentCommentId)
                        parent?.replies.push(comment)
                    }
                })
        
                setCommentTree(rootComments)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoadingComments(false)
            }
        }
        getPostComments()
    }, [reset])

    const sortedComments = sort === "top" 
        ?   [...commentTree].sort((a, b) => b.score - a.score)
        :   [...commentTree].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    
    useEffect(() => {
        if (replyBoxId > 0 && screenWidth < 768) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [replyBoxId])


    if (isLoadingPost) {
        return <TailSpin wrapperClass="loader" color="var(--accent)"/>
    }

    if (!post || !postId) {
        return <NotFound object="post" />
    }

    return (
        <div className="flex flex-col grow">
            <PostBody 
                id={post.id}
                boardName={boardInfo.name}
                title={post.title}
                score={post.score}
                flair={post.flair}
                authorUsername={post.authorUsername}
                createdAt={post.createdAt}
                body={post.body}
                commentCount={post.commentCount}
            />
            <CommentBox 
                isCommentBoxActive={isCommentBoxActive}
                setIsCommentBoxActive={setIsCommentBoxActive}
                newComment={newComment}
                setNewComment={setNewComment}
            />
            <CommentSort 
                commentCount={post.commentCount}
                sort={sort}
                setSort={setSort}
            />
            {isLoadingComments ? <TailSpin wrapperClass="loader" color="var(--accent)"/> :
                sortedComments.length > 0
                    ?
                        <div className="flex w-full flex-col md:gap-5 mt-3 bg-(--surface-1) p-5 border border-(--border) rounded-2xl overflow-hidden">
                            {isNested &&
                                <button 
                                    onClick={() => {
                                        setReset(prev => prev + 1)
                                        setIsNested(false)
                                    }}
                                    className="flex items-center gap-2 mb-3 md:mb-0 text-sm text-(--text-muted) underline underline-offset-2 w-fit"
                                >
                                    <MoveLeft className="size-4"/>
                                    See full discussion
                                </button>
                            }
                            {sortedComments.map(item =>
                                <CommentThread 
                                    key={item.id}
                                    postAuthor={post.authorUsername}
                                    postId={postId}
                                    parentCommentId={item.parentCommentId}
                                    id={item.id}
                                    authorUsername={item.authorUsername}
                                    profilePictureUrl={item.profilePictureUrl}
                                    createdAt={item.createdAt}
                                    score={item.score}
                                    body={item.body}
                                    replies={item.replies}
                                    setCommentTree={setCommentTree}
                                    setIsNested={setIsNested}
                                    replyBoxId={replyBoxId}
                                    setReplyBoxId={setReplyBoxId}
                                />
                            )}
                        </div>
                    :
                        <div className="grow content-center">
                            <p className="text-center font-medium text-(--text-muted)!">
                                Be the first one to comment!
                            </p>
                        </div>
            }
        </div>
    )
}