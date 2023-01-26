import React, { ChangeEvent, useState } from 'react'
import { IComment } from '../../../InterFace/DiscussionType'
import { CommentsPropsType } from '../../../InterFace/componentsType'
import SendMessage from '../Elements/SendMessage'
import SingleComment from './SingleComment'

const Comments = ( props: CommentsPropsType ) => {
    const {id, date, iLikedIt, likes, text, user, replies, submitSendComment, submitLike} = props
    const [valueInput, setValueInput] = useState<string>('')
    const [replyShow, setReplyShow] = useState<boolean>(replies.length ? true : false)

    const submitChange = ( event: ChangeEvent<HTMLInputElement> ): void => {
        setValueInput(event.target.value)
    }

    const submitReply = (): void => {
        setReplyShow(true)
    }

    const submitMessage = (): void => {
        submitSendComment(valueInput,id)
        setValueInput('')
    }
    return (
        <div className='w-full pt-4 px-4 border-b border-slate-300 last:border-0 relative'>
            <SingleComment
                id={id} 
                user={user}
                text={text}
                date={date}
                likes={likes}
                iLikedIt={iLikedIt}
                reply={true}
                submitReply={submitReply}
                submitLike={()=>submitLike([id])}
            />
            {replyShow
                ?
                    <div className='pl-[3.5rem] mb-4'>
                        <div 
                            className='absolute left-[36px] top-[4.5rem] bottom-4 w-[1px] bg-slate-300'
                        />
                        {replies.map((item: IComment) => {
                            return (
                                <SingleComment
                                    id={item.id} 
                                    user={item.user}
                                    text={item.text}
                                    date={item.date}
                                    likes={item.likes}
                                    iLikedIt={item.iLikedIt}
                                    reply={false}
                                    key={item.id}
                                    submitReply={()=>{}}
                                    submitLike={()=>submitLike([id,item.id])}
                                />
                            )
                        })}
                        <SendMessage 
                            placeholder='Reply'
                            valueInput={valueInput}
                            submitChange={submitChange}
                            submitSendComment={submitMessage}
                        />
                    </div>
                :
                null
            }
        </div>
    )
}

export default Comments