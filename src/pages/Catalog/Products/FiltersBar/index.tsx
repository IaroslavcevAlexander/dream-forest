import { Root } from "./styled-component"
import { data } from "./data"
import Filter from "./Filter"


const FiltersBar = () => {
    return(
        <Root>
            <Filter data={data} />
        </Root>
    )
}

export default FiltersBar