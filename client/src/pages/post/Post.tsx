import { useParams } from "react-router"
import { posts } from "../../../data/board"
import { comments, type Comment } from "../../../data/post"
import { MoveLeft } from "lucide-react"
import type { Sort } from "../../utils"
import { useEffect, useState } from "react"
import CommentThread from "./components/CommentThread"
import PostBody from "./components/PostBody"
import CommentBox from "./components/CommentBox"
import CommentSort from "./components/CommentSort"
import NotFound from "../NotFound"
import { useGlobalContext } from "../../utils"

export interface CommentWithReplies extends Comment {
    replies: CommentWithReplies[]
}

export default function Post() {

    const { postId } = useParams()
    const post = posts.find(item => item.id.toString() === postId)
    const [isCommentBoxActive, setIsCommentBoxActive] = useState(false)
    const [sort, setSort] = useState<Sort>("top")
    const [commentTree, setCommentTree] = useState<CommentWithReplies[]>([])
    const [isNested, setIsNested] = useState(false)
    const [reset, setReset] = useState(0)
    const [replyBoxId, setReplyBoxId] = useState<number>(0)
    const [newComment, setNewComment] = useState("")
    const { screenWidth } = useGlobalContext()

    const postComments = comments.filter(item => item.postId.toString() === postId)

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

    useEffect(() => {
        const map = new Map<number, CommentWithReplies>()
        postComments.forEach(item => map.set(item.id, {...item, replies: []}))
        
        const rootComments: CommentWithReplies[] = []
    
        postComments.forEach(item => {
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
    }, [reset])

    if (!post) {
        return <NotFound object="post" />
    }

    return (
        <div>
            <PostBody 
                id={post.id}
                boardName={post.boardName}
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
                        postId={item.postId}
                        parentCommentId={item.parentCommentId}
                        id={item.id}
                        authorUsername={item.authorUsername}
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
        </div>
    )
}