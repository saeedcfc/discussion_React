import React from 'react'
import { toAvatar } from '../../../Helper/string'
import { AvatarPropsType } from '../../../InterFace/componentsType'
import Avatars from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Avatar = ( props: AvatarPropsType ) => {
    const {user} = props

    if(user.avatar){
        return (
                <Avatars alt={user.name} src={user.avatar} />
        )
    }

    return (
        <a
            className='w-full min-w-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] max-h-[2.5rem] basis-10 h-10 text-blue-600 font-bold overflow-hidden rounded-full bg-blue-200 flex items-center justify-center'>
            {toAvatar(user.name)}
        </a>
    )
}

export default Avatar