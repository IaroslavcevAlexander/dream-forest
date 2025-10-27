// import { Public } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";
import type { FC } from "react";

const Root = styled(Box)(() => ({
    backgroundColor: "#FAFAFA",
}))

interface CatProps {
    data: Data
} 

interface Data {
    name: string,
    img: string,
    id: number,
}

const items = [
    {
        name: "Обувь", 
        img: "/img/sneaker.svg",
        id: 1
    }, 
    {
        name: "Одежда", 
        img: "/img/man and woman.svg",
        id: 2
    }, 
    {
        name: "Акксесуары", 
        img: "/img/bag.svg",
        id: 3
    }
]

const Categories = () => {
    return(
        <Root>
            {items.map((value) => {
                return <Category data={value} key={value.id}/>
            })}
        </Root>    
    )
}

const Category: FC<CatProps> = ({ data }) => {
    const {name, img} = data
    return(
        <Box> 
            <img src={img} alt={name} />
            <Button>{name}</Button>
        </Box>    
    )
}


export default Categories;