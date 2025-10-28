// import { Public } from "@mui/icons-material";
import type { FC } from "react";
import { Root, CatItem, Btn } from "./styled-component"

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
        img: "/img/man-and-woman.svg",
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
        <CatItem sx={{backgroundImage: `url(${img})`}}> 
            <Btn>{name}</Btn>
        </CatItem>    
    )
}

export default Categories;