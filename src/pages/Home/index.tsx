import Inner from "../../components/Inner/Inner"
import Categories from "./Categories/index"
import { CatBg } from "../../pages/Home/styled-components"

const HomePage = () => {
    return(
        <CatBg>
            <Inner>
                <Categories /> 
            </Inner>
        </CatBg>
    )
}
export default HomePage;