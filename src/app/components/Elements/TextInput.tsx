import React, { InputHTMLAttributes } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
type PropsType = InputHTMLAttributes<HTMLInputElement>

const TextInput = ( props: PropsType ) => {
    const {
        value,
        onChange,
        placeholder,
        onKeyUp
    } = props
    return (
        <TextField
            id="outlined-multiline-flexible"
            label={placeholder}
            multiline
            maxRows={4}
            type={'text'}
            value={value}
            onChange={onChange}
            onKeyUp={onKeyUp}
            className={`w-full p-2 text-sm border border-slate-300 focus:border-slate-300 bg-white  `}
        />

    )
}

export default TextInput