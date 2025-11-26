import Categories from "./Categories/index"
import Baners from "../Home/Baners/index"
import Brands from "./Brands";
import ProductsCards from "./Products";

const HomePage = () => {
    return(
        <>   
            <Categories />
            <Baners />
            <ProductsCards />
            <Brands />
        </>
    )
}
export default HomePage;