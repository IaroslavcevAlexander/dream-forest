import Inner from "../../../components/Inner/Inner.tsx"
import CardsProducts from "./CardProducts.tsx/index.tsx"
import FiltersBar from "./FiltersBar/index.tsx"
import { Wrapper, Root } from "./styled-component.ts"

const Products = () => {
    return(
        <Root>
            <Inner>
                <Wrapper>
                    <FiltersBar />
                    <CardsProducts />
                </Wrapper>
            </Inner>
        </Root>
    )
}

export default Products