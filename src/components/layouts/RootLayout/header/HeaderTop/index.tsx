import { styled } from '@mui/material/styles';
import Inner from '../../../../Inner/Inner';
import { NavLink } from "react-router-dom";
import { Box } from '@mui/material';

const Root = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.black,
}));

const Item = styled(Box)(({ theme }) => ({
    display: 'flex',
    color: theme.palette.common.white,
}));

const Line = styled(Box)(() => ({
    width: '1px',
    height: '100%',
    backgroundColor: '#fff',
}));

const DeliveryIcon = styled(Box)(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    color: theme.palette.common.white,
    textDecoration: 'none',
    fontWeight: 400,
    paddingLeft: '28px',
    '&::before': {
        content: '""',
        position: 'absolute',
        width: '20px',
        height: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        left: 0,
        backgroundImage: 'url("img/icons/box 1.svg")'
    },
}))

const SettingsIcons = styled(Box)(() => ({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 400,
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '20px',
        height: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundImage: 'url("img/icons/russia 1.svg")',
    },
}))

const HeaderTop = () => {
    return(
        <Root>
            <Inner 
                display="flex"
                justifyContent="end" 
                alignItems="center" 
                padding="13px 0"    
                gap="30px"
            >
                <Box component="a" 
                    href="tel:+37367114339"
                    className="phone-number">
                    <Item>0 67 114-339</Item>
                    <Line />
                </Box>

                <NavLink to="delivery">
                    <DeliveryIcon>
                        <Item>Доставка</Item>
                    </DeliveryIcon>
                    <Line />
                </NavLink>

                <NavLink to="settings">
                    <Item>
                        Русский
                        <SettingsIcons marginLeft='7px' />
                    </Item>
                </NavLink>
            </Inner> 
        </Root>

    )
}
export default HeaderTop;
