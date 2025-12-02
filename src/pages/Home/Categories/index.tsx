import { Root, CatItem, Btn } from "./styled-component"
import Inner from "../../../components/Inner/Inner";
import { CatsWrapper } from '../Categories/styled-component'
import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../redux/api/category/api";
import type { Category } from "../../../redux/api/category/types";

const Categories = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetCategoriesQuery()

    if (!data || isLoading) return null 
    
    return(
        <Root>
            <Inner>
                <CatsWrapper>
                {data.data.map((category: Category) => (
                    <CategoryItem 
                    key={category.id} 
                    {...category} 
                    onClick={() => navigate(`/catalog/${category.id}`)}
                    />
                ))}
                </CatsWrapper>
            </Inner>
        </Root>
    )
}

interface CategoryItemProps extends Category {
  onClick: () => void
}

const CategoryItem = ({ name, image, onClick }: CategoryItemProps) => {
  return (
    <CatItem 
      onClick={onClick}
      sx={{ backgroundImage: `url(${image})` }}
    >
      <Btn>{name}</Btn>
    </CatItem>
  )
}


export default Categories;