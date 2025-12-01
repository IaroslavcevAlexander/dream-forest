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
                    <Title>{filter.name}</Title>

                    <BtnWrapper>
                        {filter.type === "select" && 
                            filter.values?.map(values => (
                            <Box key={values.name}>
                                <Btn
                                    sx={{margin: '0 0', border: '1px solid', borderColor: '#ECECEC'}}
                                    onClick={() => setActive(values.name)} 
                                    $active={active === values.name}
                                    $size="small"
                                >{values.name}</Btn>
                            </Box>
                        ))}
                    </BtnWrapper>

                    <SliderPriceWrapper>
                        {filter.type === "number" && (
                            <>
                                <SliderPrice
                                size="small"
                                defaultValue={[filter.min!, filter.max!]}
                                min={filter.min}
                                max={filter.max}
                                valueLabelDisplay="auto"
                                />  
                                
                                <PriceTextWrapper>
                                    <ItemWrapper>от <PriceText>{filter.min}</PriceText></ItemWrapper>
                                    <ItemWrapper>до <PriceText>{filter.max}</PriceText></ItemWrapper>
                                </PriceTextWrapper>
                            </>
                        )}
                    </SliderPriceWrapper>

                    <StrapTypeWrapper>
                        {filter.type === "multiselect" &&
                            filter.values?.map((item, index) => (
                        <FormControlLabel
                            key={index}
                            control={<StyledCheckbox disableRipple />}
                            label={item.name || item.name}
                        />
                        ))}

                    </StrapTypeWrapper>
                </Box>
            ))}
        </FiltersWrapper>
    )
}

export default Filter