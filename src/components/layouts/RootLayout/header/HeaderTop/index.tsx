import { styled } from '@mui/material/styles';
import Inner from '../../../../Inner/Inner';
import { NavLink } from "react-router-dom";
import { Box } from '@mui/material';

const Root = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.black,
}));

const DeliveryIcon = styled('a')(({ theme }) => ({
    position: 'relative',
    color: theme.palette.common.white,
    textDecoration: 'none',
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
        <Root>
            <Inner 
                display={"flex"} 
                justifyContent="end" 
                alignItems="center" 
                padding="13px 0"    
                gap="30px"
            >
                <Box component="a" 
                    href="tel:+37367114339"
                    className="phone-number">
                    0 67 114-339
                </Box>

                <NavLink to="delivery">
                    <DeliveryIcon />
                    Доставка
                </NavLink>

                <NavLink to="settings">
                    Русский
                    <Box 
                        component="img" 
                        src="img/icons/russia 1.svg" 
                        alt="language"/>
                </NavLink>
            </Inner> 
        </Root>

    )
}
export default HeaderTop;
