import Inner from "../../components/Inner/Inner"
import Categories from "./Categories/index"
import { CatBg } from "../../pages/Home/styled-components"
import Baners from "../Home/Baners/index"


const HomePage = () => {
    return(
        <>   
            <CatBg>
                <Inner>
                    <Categories />
                </Inner>    
            </CatBg>

            <Inner>
                <Baners />
            </Inner>              
        </>
    )
}
export default HomePage;