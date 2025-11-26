import Inner from "../../../components/Inner/Inner.tsx"
import CatalogCardsProducts from "./CatalogCardProducts.tsx/index.tsx"
import FiltersBar from "./FiltersBar/index.tsx"
import { CatProdWrapper, Root } from "./styled-component.ts"

const CatalogProducts = () => {
    return(
        <Root>
            <Inner>
                <CatProdWrapper>
                    <FiltersBar />
                    <CatalogCardsProducts />
                </CatProdWrapper>
            </Inner>
        </Root>
    )
}

export default CatalogProducts