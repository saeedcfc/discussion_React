import React, { useState } from 'react'
import { currentUser, discussions } from '../Models/discussions'
import { IDiscussion, IComment } from '../InterFace/DiscussionType'
import Comments from './components/Comments/CommentsIndex'
import SendComment from './components/Comments/SendComment'

const createComment = ( text: string ): IComment => {
    return {
        id: new Date().getTime(),
        date: new Date().getTime(),
        iLikedIt: false,
        likes: 0,
        user: currentUser,
        text
    }
}

const App = () => {
    const [comments, setComments] = useState<IDiscussion[]>(discussions)

    const submitSendComment = ( text: string, id?: number ): void => {
        if(id){
            const cloneComments: IDiscussion[] = [...comments]
            const indexComment: number = comments.findIndex((item: IDiscussion) => item.id === id)
            cloneComments[indexComment]['replies'] = [createComment(text),...comments[indexComment]['replies']]
            setComments(cloneComments)
        }else{
            const createNewComment: IDiscussion = {
                ...createComment(text) ,
                replies: []
            }
            setComments([createNewComment,...comments])
        }
    }

    const submitLike = (arg: number[]): void => {
        const cloneComments: IDiscussion[] = [...comments]
        const indexComment: number = comments.findIndex((item: IDiscussion) => item.id === arg[0])
        if(arg.length === 1){
            if(cloneComments[indexComment]['iLikedIt']){
                cloneComments[indexComment]['iLikedIt'] = false
                cloneComments[indexComment]['likes']--
            }else{
                cloneComments[indexComment]['iLikedIt'] = true
                cloneComments[indexComment]['likes']++
            }
        }else if(arg.length === 2){
            const cloneReply: IComment[] = [...cloneComments[indexComment]['replies']]
            const indexReply: number = cloneReply.findIndex((item: IComment) => item.id === arg[1])
            if(cloneReply[indexReply]['iLikedIt']){
                cloneReply[indexReply]['iLikedIt'] = false
                cloneReply[indexReply]['likes']--
            }else{
                cloneReply[indexReply]['iLikedIt'] = true
                cloneReply[indexReply]['likes']++
            }
            cloneComments[indexComment]['replies'] = cloneReply
        }
        setComments(cloneComments)
    }
    return (
        <div className='w-full md:container m-auto'>
            <div className='w-full md:max-w-lg m-auto md:border-x md:border-slate-300 md:border-b'>
                <SendComment
                    submitSendComment={submitSendComment}
                />
                {comments.map((comment: IDiscussion) => 
                    <Comments 
                        key={comment.id}
                        submitSendComment={submitSendComment}
                        submitLike={submitLike}
                        {...comment}
                    />
                )}
            </div>
        </div>
    )
}

export default App