import type { FC } from "react";
import { Root, CatItem, Btn } from "./styled-component"
import Inner from "../../../components/Inner/Inner";
import { CatsWrapper } from '../Categories/styled-component'
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    return(
        <Root>
            <Inner>
                <CatsWrapper
                    onClick={() => navigate("/catalog")}
                >
                    {items.map((value) => <Category data={value} key={value.id}/>)}
                </CatsWrapper>
            </Inner>
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