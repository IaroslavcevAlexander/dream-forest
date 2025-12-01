import type { FC } from "react"
import { BanerWrapper , Btn } from "./styled-component"
import {BanerTitle} from "./styled-component"
import type { Banner } from "../../../redux/api/baners/types"

const Baner: FC<Banner> = ({ title, image, buttonAlign, buttonBg }) => {
    
    return(
        <BanerWrapper  sx={{backgroundImage: `url(${image})`}}>
            {title && <BanerTitle>{title}</BanerTitle>}
            <Btn $align={buttonAlign} $backgroundColor={buttonBg}>Подробнее</Btn>
        </BanerWrapper>
    )
}

export default Baner