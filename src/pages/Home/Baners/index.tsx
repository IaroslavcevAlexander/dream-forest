import type { FC } from "react"
import Baner from "./Baner"
import type { BanerData } from "./Baner"
import { Root, BanersWrapper } from "./styled-component"
import Inner from "../../../components/Inner/Inner"
import { Line } from "../../../components/style-component/Line"
import { Title } from "../../../components/style-component/Title"
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    
    return(
        <Root>
            <Inner>
                <Title>
                    Рекомендуем
                    <Line sx={{marginTop: '15px', width: '175px'}}/>
                </Title>

                <BanersWrapper onClick={() => navigate("/catalog")}>
                    {data.map((value) => <Baner data={value} key={value.id} />)}
                </BanersWrapper>
            </Inner>
        </Root>
    )
}

export default Baners