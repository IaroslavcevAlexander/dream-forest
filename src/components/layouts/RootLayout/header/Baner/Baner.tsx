import type { FC } from "react"
import { BanerBtn, BanerItemWrapper, BanerWrapper, OldPrice, Price, PricesWrapper } from "../Baner/styled-component"
import { Box } from "@mui/material"

export interface BanerData {
    img: string
    price: number
    oldPrice: number
    currency: string
}

interface Props {
    data: BanerData
}



const Baner: FC<Props>= ({ data }) => {
    return(
        <>
            <BanerWrapper 
                sx={{backgroundImage: data.img ? `url(${data.img})` : undefined,}}>
                <BanerItemWrapper>

                    <PricesWrapper>

                        <OldPrice>
                            <Box>{data.oldPrice}</Box> <Box>{data.currency}</Box>
                        </OldPrice>

                        <Price> 
                            <Box>{data.price}</Box> <Box>{data.currency}</Box>
                        </Price>

                    </PricesWrapper>    

                    <BanerBtn sx={{ backgroundImage: `url(/img/icons/90gradusov.svg)` }} />

                </BanerItemWrapper>
            </BanerWrapper>
        </>
    )
}

export default Baner