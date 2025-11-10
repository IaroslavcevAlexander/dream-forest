import type { FC } from "react"
import { BrendWrapper, BrandLogo } from "./styled-component"


interface BrandData {
    id: number
    img: string
    name: string
}

interface Props {
    data: BrandData
}

const Brand: FC<Props>= ({ data }) => {
    const { img, name } = data

    return(
        <BrendWrapper>
            <BrandLogo><img src={img} alt={name} /></BrandLogo>
        </BrendWrapper>
    )
}

export default Brand