import type { FC } from "react"
import { BrandLogo, BrandWrapper } from "./styled-component"


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
        <BrandWrapper>
            <BrandLogo src={img} alt={name} />
        </BrandWrapper>
    )
}

export default Brand