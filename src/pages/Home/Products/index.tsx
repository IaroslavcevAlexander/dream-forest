import type { FC } from "react"
import { ProductsCardsWrapper, Root } from "./styled-component"
import { data } from "../../../components/ProductCard/data.ts"
import { Title } from "../../../components/style-component/Title.ts"
import Inner from "../../../components/Inner/Inner"
import { Line } from "../../../components/style-component/Line"
import ProductsCard from "../../../components/ProductCard/index.tsx"

const ProductsCards: FC= () => {
    return(
        <Root>
            <Inner>
                <Title>
                    Избранные
                    <Line sx={{marginTop: '15px', width: '148px',}}/>
                </Title>

                <ProductsCardsWrapper>
                    {data.map((value) => <ProductsCard data={value} key={value.id} />)}
                </ProductsCardsWrapper>
            </Inner>
        </Root>
    )
}

export default ProductsCards