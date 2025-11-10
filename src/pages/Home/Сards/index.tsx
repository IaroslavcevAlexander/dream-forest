import type { FC } from "react"
import Inner from "../../../components/Inner/Inner"
import { CardsWrapper, Root } from "./styled-component"
import { Title } from "../Сards/styled-component"
import { Line } from "../Baners/styled-component"
import Card from "../Сards/Card"
import { data } from "../Сards/data"


const Cards: FC= () => {
    return(
        <Root>
            <Inner>
                <Title>
                    Избранные
                    <Line/>
                </Title>

                <CardsWrapper>
                    {data.map((value) => {
                        return <Card data={value} key={value.id} />
                    })}
                </CardsWrapper>
            </Inner>
        </Root>
    )
}

export default Cards