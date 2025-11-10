import Categories from "./Categories/index"
import Baners from "../Home/Baners/index"
import Cards from "./Сards";
import Brands from "./Brands";


const HomePage = () => {
    return(
        <>   
            <Categories />
            <Baners />
            <Cards />
            <Brands />
        </>
    )
}
export default HomePage;