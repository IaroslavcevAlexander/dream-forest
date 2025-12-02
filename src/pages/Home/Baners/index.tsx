import type { FC } from "react"
import Baner from "./Baner"
import { Root, BanersWrapper } from "./styled-component"
import Inner from "../../../components/Inner/Inner"
import { Line } from "../../../components/style-component/Line"
import { Title } from "../../../components/style-component/Title"
import { useNavigate } from "react-router-dom";
import { useGetBannersQuery } from "../../../redux/api/baners/api"

const Baners: FC= () => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetBannersQuery();

    if (!data || isLoading) return null 
    
    return(
        <Root>
            <Inner>
                <Title>
                    Рекомендуем
                    <Line sx={{marginTop: '15px', width: '175px'}}/>
                </Title>

                <BanersWrapper onClick={() => navigate("/catalog")}>
                    {data.data.map((value) => <Baner key={value.id} {...value} />)}
                </BanersWrapper>
            </Inner>
        </Root>
    )
}

export default Baners