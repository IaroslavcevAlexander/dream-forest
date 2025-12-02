import type { FC } from "react"
import { ProductsCardsWrapper, Root } from "./styled-component"
import { Title } from "../../../components/style-component/Title.ts"
import Inner from "../../../components/Inner/Inner"
import { Line } from "../../../components/style-component/Line"
import ProductsCard from "../../../components/ProductCard/index.tsx"
import { useGetProductQuery } from "../../../redux/api/product/api.ts"
import type { Product } from "../../../redux/api/product/types.ts"

const ProductsCards: FC = () => {
    const { data: products, isLoading } = useGetProductQuery()

    if ( !products || isLoading) return null

    return (
        <Root>
            <Inner>
                <Title>
                    Избранные
                    <Line sx={{ marginTop: '15px', width: '148px' }} />
                </Title>

                <ProductsCardsWrapper>
                {products.data.map((product: Product) => (
                    <ProductsCard key={product.id} data={product} />
                ))}
                </ProductsCardsWrapper>

            </Inner>
        </Root>
    )
}

export default ProductsCards
