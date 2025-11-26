import { Box } from "@mui/material"
import Inner from "../../../../components/Inner/Inner"
import { Root } from "./styled-component"
import { data } from "./data"
import Filter from "./Filter"


const FiltersBar = () => {
    return(
        <Root>
            <Inner>
                <Box>
                    <Filter data={data} />
                </Box>
            </Inner>
        </Root>
    )
}

export default FiltersBar