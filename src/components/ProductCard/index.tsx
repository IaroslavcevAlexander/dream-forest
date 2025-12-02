import type { FC } from "react"
import { Box } from "@mui/material"
import { Btn, BtnWrapper, Desc, DescWrapper, ImgCard, Name, ProductCadrWrapper } from "./styled-component"
import PriceBlock from "../../pages/Home/Products/PriceBlock"
import type { Product } from "../../redux/api/product/types"

interface Props {
    data: Product
}

const ProductCard: FC<Props> = ({ data }) => {
    const { name, price, oldPrice, description, color, isFavorite, inCart, img, memory, } = data

    const cartIcon = inCart.status 
    ? "/img/icons/bag-active.svg"
    : "/img/icons/bag icons min.svg"

    const favoriteIcon = isFavorite.status
    ? "/img/icons/likeWhite.svg"
    : "/img/icons/heart favorites min.svg"

    return(
        <ProductCadrWrapper>
            <BtnWrapper>
                <Btn active={inCart.status}>
                    <Box component='img' src={cartIcon} alt="cart" />
                </Btn>
                <Btn active={isFavorite.status}>
                    <Box component='img' src={favoriteIcon} alt="favorite" />
                </Btn>
            </BtnWrapper>

            <ImgCard><Box component='img' src={img} alt={name} /></ImgCard>

            <DescWrapper>
                <Name>{[ name, memory, color ].filter(Boolean).join(', ')}</Name>   
                <Desc>{ description.filter(Boolean).join(', ')}</Desc>
                <PriceBlock data={{ price, oldPrice }} />
            </DescWrapper>
        </ProductCadrWrapper>
    )
}

export default ProductCard