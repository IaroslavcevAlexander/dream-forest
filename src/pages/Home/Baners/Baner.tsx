import type { FC } from "react"
import { BanerWrapper , Btn } from "./styled-component"
import {BanerTitle} from "./styled-component"

export type ButtonAlign = 'left' | 'right'
export type ButtonColor = 'light' | 'dark'

export interface BanerData {
    title?: string,
    img: string,
    buttonAlight: ButtonAlign,
    id: number,
    buttonBg: ButtonColor,
}

interface Props {
    data: BanerData
}

const Baner: FC<Props> = ({ data }) => {
    const { title, img, buttonAlight } = data
    
    return(
        <BanerWrapper  sx={{backgroundImage: `url(${img})`}}>
            {title && <BanerTitle>{title}</BanerTitle>}
            <Btn $align={buttonAlight} $backgroundColor={data.buttonBg}>Подробнее</Btn>
        </BanerWrapper>
    )
}

export default Baner