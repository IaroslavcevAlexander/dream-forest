import { Box, FormControlLabel } from "@mui/material"
import { useState, type FC } from "react"
import type { Props } from "./interfaces"
import { BtnWrapper, FiltersWrapper, ItemWrapper, PriceText, PriceTextWrapper, SliderPriceWrapper, StrapTypeWrapper, StyledCheckbox, Title } from "./styled-component"
import { Btn } from "../../styled-component"
import { SliderPrice } from "./StylePriceSlider"



const Filter: FC<Props>= ({ data }) => {
    const [ active, setActive ] = useState("Все")

    return(
        <FiltersWrapper>
            {data.map((filter) => (
                <Box
                key={filter.id}
                >
                    <Title>{filter.title}</Title>

                    <BtnWrapper>
                        {"tags" in filter && filter.tags.map(tag => (
                            <Box key={tag.name}>
                                <Btn
                                    sx={{margin: '0 0', border: '1px solid', borderColor: '#ECECEC', padding: '7px 20px',}}
                                    onClick={() => setActive(tag.name)} 
                                    $active={active === tag.name}
                                >{tag.name}</Btn>
                            </Box>
                        ))}
                    </BtnWrapper>

                    <SliderPriceWrapper>
                        {"price" in filter && (
                            <SliderPrice
                            size="small"
                            defaultValue={[filter.price[0].from, filter.price[0].to]}
                            min={filter.price[0].from}
                            max={filter.price[0].to}
                            valueLabelDisplay="auto"
                            />  
                        )}

                        {"price" in filter && (
                            <PriceTextWrapper>
                                <ItemWrapper>от <PriceText>{filter.price[0].from}</PriceText></ItemWrapper>
                                <ItemWrapper>до <PriceText>{filter.price[0].to}</PriceText></ItemWrapper>
                            </PriceTextWrapper>
                        )}

                    </SliderPriceWrapper>

                    <StrapTypeWrapper>
                        {"tipe" in filter && filter.tipe.map((item, index) => (
                        <FormControlLabel
                            key={index}
                            control={<StyledCheckbox />}
                            label={item.material || item.brand}
                        />
                        ))}

                    </StrapTypeWrapper>
                </Box>
            ))}
        </FiltersWrapper>
    )
}

export default Filter