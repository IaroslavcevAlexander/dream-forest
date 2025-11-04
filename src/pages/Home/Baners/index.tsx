import type { FC } from "react"
import Baner from "./Baner"
import type { BanerData } from "./Baner"
import { Root, BanersWrapper, Title } from "./stiled-component"

const data: BanerData[] = [
    {
        id: 1,
        title: 'Новая коллекция ZX',
        img: 'public/img/legs.svg',
        buttonAlight: 'left',
        buttonBg: 'light',
    },
    {
        id: 2,
        title: '',
        img: 'public/img/watch.svg',
        buttonAlight: 'right',
        buttonBg: 'dark',
    }
]

const Baners: FC= () => {
    return(
        <Root sx={{ backgroundColor: 'white', padding: '20px' }}>
            <Title>Рекомендуем</Title>
            <BanersWrapper>
                {data.map((value) => {
                    return <Baner data={value} key={value.id} />
                })}
            </BanersWrapper>
        </Root>
    )
}

export default Baners