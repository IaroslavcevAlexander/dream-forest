import { Box } from "@mui/material"
import Inner from "../../../Inner/Inner"
import { FooterWrapper, Root } from "./styled-component"
import SubFooter from "./SubFooter"

const Footer = () => {
    return(
        <Root>
            <Inner>
                <FooterWrapper>
                    <Box>a</Box>
                    <Box>a</Box>
                    <Box>a</Box>
                    <Box>a</Box>
                </FooterWrapper>
            </Inner>

            <SubFooter />
        </Root>
    )
}

export default Footer