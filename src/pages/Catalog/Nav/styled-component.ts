import { Box } from "@mui/material";
import styled from "styled-components";

export const Root = styled(Box)(() =>({
    width: '100%',
    borderBottom: '1px solid #ECECEC',
}))

export const NavWrapper = styled(Box)(() =>({
    display: 'flex',
    margin: '20px 0',
    fontWeight: '300',
    gap: '10px',
}))

export const HomeWrapper = styled(Box)(() =>({
    display: 'flex',
    gap: '6px',
}))

export const HomeIcon = styled('img')(() =>({
}))

export const NavItem = styled(Box)(() =>({
}))