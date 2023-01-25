import { ChangeEventsubmitr } from "react"
import { IComment, IDiscussion, IUser } from "./DiscussionType"

export interface submitSendCommentPropsType {
    submitSendComment: Function
}
export interface CommentsPropsType extends submitSendCommentPropsType, IDiscussion {
    submitLike: Function
}

export interface SendMessagePropsType {
    placeholder: string
    valueInput: string 
    submitChange: ChangeEventsubmitr
    submitSendComment: VoidFunction
}

export interface AvatarPropsType {
    user: IUser
}

export interface AvatarImagePropsType {
    src: string
    alt: string
}
export interface UserCommentCardPropsType extends IComment {
    reply: boolean
    submitReply: VoidFunction
    submitLike: VoidFunction
}