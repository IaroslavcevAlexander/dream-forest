import { NavLink } from "react-router-dom";
import { Box, ThemeProvider, styled } from "@mui/material";
import Theme from '../../../../../config/theme';
import Inner from '../../../../Inner/Inner';

const GridContainer = styled(Box)(({ theme }) =>({
    backgroundColor: theme.palette.common.black,
    display: 'grid',
    alignItems: 'center',
    gap: theme.spacing(3),
    height: '40px',
}))

const GridInner = styled(Inner)(({ theme }) => ({
    display: 'grid',
    gridAutoFlow: 'column',
    alignItems: 'center',
    justifyContent: 'end',
    gap: theme.spacing(3),
    margin: 0,
}))

const StyledLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.common.white,
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    '& img': {
        marginLeft: "7px",
        marginRight: "7px",
        width: "20px",
        height: "20px",
    },
}))

const PhoneLink = styled('a')(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.common.white,
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
}))

const HeaderTop = () => {
    return(
        <ThemeProvider theme={Theme}>
            <GridContainer>
                <GridInner>
                    <PhoneLink
                        href="tel:+37367114339"
                        className="phone-number">
                        0 67 114-339
                    </PhoneLink>

                    <StyledLink
                    to="delivery"
                    >
                        <img src="img/icons/box 1.svg" alt="delivery" />
                        Доставка
                    </StyledLink>
                    
                    <StyledLink
                    to="language"
                    >
                        Русский
                        <img src="img/icons/russia 1.svg" alt="language" />
                    </StyledLink>
                </GridInner>
            </GridContainer>
        </ThemeProvider>
    )
}
export default HeaderTop;
