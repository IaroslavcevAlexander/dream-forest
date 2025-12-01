import { Box, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Root = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.black,
}));

export const noUnderline = {
    textDecoration: 'none',
  '&:hover': { textDecoration: 'none' },
};

export const Phone = styled('a')(() => noUnderline);
export const Link = styled(NavLink)(() => noUnderline);

export const Item = styled(Box)(({ theme }) => ({
    display: 'flex',
    color: theme.palette.common.white,
    textDecoration: 'none',
    fontWeight: 400,
}));

export const Line = styled(Box)(() => ({
    display: 'flex',
    width: '1px',
    height: '40px',
    backgroundColor: '#424242',
}));

export const DeliveryIcon = styled(Box)(({ theme }) => ({
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

export const SettingsIcons = styled(Box)(() => ({
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