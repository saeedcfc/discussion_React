import React, { KeyboardEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCommentAlt,
    faCommentSms, faFilePen,
    faMessage,
    faPaperclip,
    faPaperPlane, faPencil, faPencilSquare, faPenSquare, faReceipt,
    faRightLeft
} from '@fortawesome/free-solid-svg-icons'
import { SendMessagePropsType } from '../../../InterFace/componentsType'
import TextInput from './TextInput'
import Avatar from './Avatar'
import { currentUser } from '../../../Models/discussions'

const SendMessage = ( props: SendMessagePropsType ) => {
    const {
        placeholder,
        valueInput,
        submitChange,
        submitSendComment
    } = props

    const submitKey = (event: KeyboardEvent<HTMLInputElement>): void => {
        if(event.key === 'Enter' && valueInput.length > 0){
            submitSendComment()
        }
    }
    return (
        <div className='flex items-center gap-4 w-full'>
            <Avatar 
                user={currentUser}
            />
            <TextInput 
                placeholder={placeholder}
                onChange={submitChange}
                value={valueInput}
                onKeyUp={submitKey}
            />
            <button onClick={submitSendComment} type={'button'} className={`${!valueInput.length && 'hidden'} text-blue-600 hover:text-blue-800`}>
                <FontAwesomeIcon icon={faPencil} className={'text-base'} />
            </button>
        </div>
    )
}

export default SendMessage