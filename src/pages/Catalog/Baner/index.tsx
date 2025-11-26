import { BanerImg, BanerWrapper, Desc, DescWrapper, Root, Title } from "./styled-component"
import Inner from "../../../components/Inner/Inner"
import { Line } from "../../../components/style-component/Line"

const CatalogBaner = () => {
    return(
        <Root>
            <Inner>
                <BanerWrapper>

                    <DescWrapper>

                        <Title>Наручные Часы
                            <Line sx={{width: '190px'}}/>                            
                        </Title>

                        <Desc>Носи время на запястье с нашей подборкой мужских часов, которые можно купить прямо здесь, на Dream<br />Forest.</Desc>
                    </DescWrapper>

                    <BanerImg src="/img/catalogWatchBaner.svg" alt="Banner" />

                </BanerWrapper>
            </Inner>
        </Root>
    )
}

export default CatalogBaner