import Brand from "./Brand"
import { BrandsWrapper } from "./styled-component"

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
        <BrandsWrapper>
            {data.map((value) => <Brand data={value} key={value.id}/>)}
        </BrandsWrapper>
    )
}

export default Brands