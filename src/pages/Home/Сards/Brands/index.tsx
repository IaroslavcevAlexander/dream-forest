import Brand from "./Brand"
import { BrendsWrapper } from "./styled-component"

const data = [
    {
        id: 1,
        name: 'mango',
        img: '/img/icons/mango 1.svg',
    },
    {
        id: 2,
        name: 'adidas',
        img: '/img/icons/icon-adidas-logo 1.svg',
    },
    {
        id: 3,
        name: 'nike',
        img: '/img/icons/nike.svg',
    },
    {
        id: 4,
        name: 'zara',
        img: '/img/icons/zara.svg',
    },
]


const Brands = () => {
    return(
        <BrendsWrapper>
            {data.map((value) => {
                return <Brand data={value} key={value.id}/>
            })}
        </BrendsWrapper>
    )
}

export default Brands