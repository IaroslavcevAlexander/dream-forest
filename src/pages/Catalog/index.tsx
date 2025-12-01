import { Box } from "@mui/material"
import CatalogBaner from "./Baner"
import Nav from "./Nav"
import CatalogProducts from "./Products"

const Catalog = () => {
    return(
        <Box>
            <CatalogBaner />
            <Nav />
            <CatalogProducts />
        </Box>
    )
}

export default Catalog