import type { FC } from "react"
import Baner from "./Baner"
import type { BanerData } from "./Baner"
import { Root, BanersWrapper, Title, Line } from "./styled-component"
import Inner from "../../../components/Inner/Inner"

const data: BanerData[] = [
    {
        id: 1,
        title: 'Новая коллекция ZX',
        img: '/img/legs.svg',
        buttonAlight: 'left',
        buttonBg: 'light',
    },
    {
        id: 2,
        title: '',
        img: '/img/watch.svg',
        buttonAlight: 'right',
        buttonBg: 'dark',
    }
]

const Baners: FC= () => {
    return(
        <Root>
            <Inner>
                <Title>
                    Рекомендуем
                    <Line/>
                </Title>

                <BanersWrapper>
                    {data.map((value) => {
                        return <Baner data={value} key={value.id} />
                    })}
                </BanersWrapper>
            </Inner>
        </Root>
    )
}

export default Baners