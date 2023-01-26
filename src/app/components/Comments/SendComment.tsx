import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { submitSendCommentPropsType } from '../../../InterFace/componentsType'
import SendMessage from '../Elements/SendMessage'

const SendComment = (props: submitSendCommentPropsType ) => {
    const {submitSendComment} =props
    const [valueInput, setValueInput] = useState<string>('')

    const submitClick = (): void => {
        submitSendComment(valueInput)
        setValueInput('')
    }

    const submitChange = ( event: ChangeEvent<HTMLInputElement> ): void => {
        setValueInput(event.target.value)
    }
    return (
        <div className='w-full bg-slate-100 p-4 border-b border-slate-300'>
            <SendMessage 
                placeholder='Write a Message...'
                valueInput={valueInput}
                submitChange={submitChange}
                submitSendComment={submitClick}
            />
        </div>
    )
}

export default SendComment