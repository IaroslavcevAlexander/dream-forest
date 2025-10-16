import { NavLink } from "react-router-dom";
import { Box, ThemeProvider, styled } from "@mui/material";
import Theme from '../../../../config/theme';
import Inner from '../../../../components/Inner/Inner'

const FlexContainer = styled(Box)(({ theme }) =>({
    backgroundColor: theme.palette.common.black,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: theme.spacing(3),
    height: '40px',
}))

const StyledLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.common.white,
    fontWeight: 400,
    '& img': {
        marginLeft: "7px",
        width: "20px",
        height: "20px",
        Top: "13px",
        Left:  "1537px",
    },
    '&.active': {
        color: '#e1d4d4',
    }
}))

const HeaderTop = () => {
    return(
        <ThemeProvider theme={Theme}>
            <FlexContainer>
                <Inner>
                    <StyledLink
                        to="tel:+37367114339"
                        className="phone-number">
                        0 67 114-339
                    </StyledLink>

                    <StyledLink
                    to="delivery"
                    >
                        Доставка
                    </StyledLink>
                    
                    <StyledLink
                    to="language"
                    >
                        Русский
                        <img src="public/img/icons/russia 1.SVG" alt="language" />
                    </StyledLink>
                </Inner>
            </FlexContainer>
        </ThemeProvider>
    )
}
export default HeaderTop;
