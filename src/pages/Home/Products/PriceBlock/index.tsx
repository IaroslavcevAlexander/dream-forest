import type { FC } from "react"
import { OldPrice, Price, PriceWrapper } from "./styled-component"

interface Price {
    quantity: number
    currency: string
}

interface PriceBlockProps {
    data: {
        price: Price
        oldPrice?: Price | number
    }
} 



const PriceBlock: FC<PriceBlockProps>= ({ data }) => {
    const { price, oldPrice, } = data
    return(
        <PriceWrapper className="priceWrapper">
            {oldPrice && typeof oldPrice !== 'number' && (
                <OldPrice>
                {oldPrice.quantity} {oldPrice.currency}
                </OldPrice>
            )}
            {price && (
                <Price>
                {price.quantity} {price.currency}
                </Price>
            )}
        </PriceWrapper>
    )
}

export default PriceBlock