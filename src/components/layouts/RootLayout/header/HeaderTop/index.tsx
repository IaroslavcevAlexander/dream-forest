import { NavLink } from "react-router-dom";
import { Box, ThemeProvider, styled } from "@mui/material";
import Theme from '../../../../../config/theme';
import Inner from '../../../../Inner/Inner';
// import { Height, Transform } from "@mui/icons-material";

const GridContainer = styled(Box)(({ theme }) =>({
    backgroundColor: theme.palette.common.black,
    display: 'grid',
    alignItems: 'center',
    height: '40px',
    margin: '0 auto',
    width: '100%',
}))

const GridInner = styled(Inner)(({ theme }) => ({
    display: 'grid',
    gridAutoFlow: 'column',
    alignItems: 'center',
    justifyContent: 'end',
    gap: theme.spacing(3),
    right: 0,
    margin: 0,
}))

const StyledLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.common.white,
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    marginLeft: "6px",
    '& img': {
        marginLeft: "7px",
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

const DeliveryLink = styled(StyledLink)(({ theme }) => ({
    position: 'relative',

    '&::before, &::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '0.5px',
        height: '40px',
        backgroundColor: theme.palette.grey[50],
    },
    '&::before': {
        left: '-15px',
    },

    '&::after': {
        right: '-15px',
    },

}))

const DeliveryIcon = styled('a')(({ theme }) => ({
    position: 'relative',
    color: theme.palette.common.white,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,
    paddingLeft: '28px',

    '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '20px',
        height: '20px',
        backgroundImage: 'url("img/icons/box 1.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    },
}))

const HeaderTop = () => {
    return(
        <ThemeProvider theme={Theme}>
            <GridContainer>
                <Inner>
                    <GridInner>
                        <PhoneLink
                            href="tel:+37367114339"
                            className="phone-number">
                            0 67 114-339
                        </PhoneLink>

                        <DeliveryLink to="delivery">
                            <DeliveryIcon />
                            Доставка
                        </DeliveryLink>

                        <StyledLink to="language">
                            Русский
                            <img src="img/icons/russia 1.svg" alt="language" 
                            />
                        </StyledLink>
                    </GridInner>
                </Inner> 
            </GridContainer>
        </ThemeProvider>
    )
}
export default HeaderTop;
