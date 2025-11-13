import { Box } from "@mui/material"
import type { FC } from "react"
import { Img, Items, ItemWrapper, Size, Title, Price, PriceWrapper } from "./styled-component"

export interface CartDropData {
    id: number
    img: string
    name: string
    size: string
    price: number
    currency: string
    quantity: number
    color?: string
}

interface Props {
    data: CartDropData[]
}

const CartDrop: FC<Props> = ({ data }) => {

    return(
        <>
            {data.map((cart) => (
                <ItemWrapper
                    key={cart.id}
                >

                    <Img src={cart.img} alt={cart.name} />

                    <Items>
                        <Title>{cart.name}</Title>
                        <Size>размер: {cart.size}</Size>
                        <PriceWrapper>
                            <Price>{cart.price} {cart.currency}</Price>
                            <Box> {`-`} {cart.quantity}</Box>
                        </PriceWrapper>
                    </Items>
                </ItemWrapper>
            ))}
        </>
    )
}

export default CartDrop