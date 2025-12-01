import { Root, CatItem, Btn } from "./styled-component"
import Inner from "../../../components/Inner/Inner";
import { CatsWrapper } from '../Categories/styled-component'
import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../redux/api/category/api";
import type { Category } from "../../../redux/api/category/types";

const Categories = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetCategoriesQuery();

    if (!data || isLoading) return null 
    
    return(
        <Root>
            <Inner>
                <CatsWrapper
                    onClick={() => navigate("/catalog")}
                >
                    {data.data.map((category: Category) => <CategoryItem key={category.id} {...category} />)}
                </CatsWrapper>
            </Inner>
        </Root>
    )
}

const CategoryItem = ({ name, image }: Category) => {
    return(
        <CatItem sx={{backgroundImage: `url(${image})`}}> 
            <Btn>{name}</Btn>
        </CatItem>    
    )
}

export default Categories;