import { Box } from "@mui/material"
import type { FC } from "react"

interface CatProps {
    data: Data
}

interface Data {
    name: string
    age: number
    email: string
    avatarUrl: string
    isOnline: boolean
    hobby: string[]
}

const info = [
    {
        name: 'Artemas',
        age: 16,
        email: 'atr69@gmail.com',
        avatarUrl: '/img/avatar/Artemas',
        isOnline: false,
        hobby: ['play Music', ', ', 'sing', ', ', 'doing nothing']
    },
    {
        name: 'Danyk',
        age: 27,
        email: 'fdmyticher@mail.com',
        avatarUrl: '/img/avatar/Danyk',
        isOnline: false,
        hobby: ['drink coffe', ', ', 'bitcoin']
    },
        {
        name: 'Franchesko',
        age: 16,
        email: 'frfrfr4et@gmail.com',
        avatarUrl: '/img/avatar/Franchesko',
        isOnline: false,
        hobby: ['GIM', ', ', 'CS', ', ', 'skam']
    }
]

const Users = () => {
    return(
        <Box>
            {info.map((cat, index) => {
                return <User data={cat} key={index} />
            })}
        </Box>    )
}

const User: FC<CatProps>= ({ data }) => {
    const {name, age, email, avatarUrl, isOnline, hobby} = data
    return(
        <Box>
            <Box>{name}</Box>
            <Box>{age}</Box>
            <Box>{email}</Box>
            <img src={avatarUrl} alt={name} />
            <Box>{isOnline}</Box>
            <Box>{hobby}</Box>
        </Box>
    )
}

export default Users