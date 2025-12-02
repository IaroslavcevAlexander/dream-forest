import { BanerImg, BanerWrapper, Desc, DescWrapper, Root, Title } from "./styled-component"
import Inner from "../../../components/Inner/Inner"
import { Line } from "../../../components/style-component/Line"
import type { Category } from "../../../redux/api/category/types";

interface BannerProps {
    category: Category;
}

const Banner = ({ category }: BannerProps) => {
    return(
        <Root>
            <Inner>
                <BanerWrapper>

                    <DescWrapper>

                        <Title> 
                            {category.name}
                            <Line sx={{width: '190px'}}/>                            
                        </Title>

                        <Desc>{category.description}</Desc>
                    </DescWrapper>

                    <BanerImg src={category.image} alt={category.name} />

                </BanerWrapper>
            </Inner>
        </Root>
    )
}

export default Banner