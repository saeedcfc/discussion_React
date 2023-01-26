
export const toAvatar = (avatar: string): string => {
    return  `${avatar.split(' ')[0][0]}${avatar.split(' ')[1][0]}`
}