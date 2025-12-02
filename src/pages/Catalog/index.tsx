import { Box } from "@mui/material"
import Banner from "./Banner"
// import Nav from "./Nav"
// import Products from "./Products"
import { useGetCategoryByIdQuery } from "../../redux/api/catalogPage/api"
import { useParams } from "react-router-dom"

const CatalogPage = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetCategoryByIdQuery(Number(id))

    if (!data || isLoading) return null

    const category = data.data
    return (
        <Box>
            <Banner category={category} />
            {/* <Nav category={category}/>
            <Products category={category}/> */}
        </Box>
    )
}

export default CatalogPage
