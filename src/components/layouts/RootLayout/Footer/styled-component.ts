import { Box, MenuItem } from "@mui/material";
import styled from "styled-components";

export const Root = styled(Box)(() => ({
    width: '100%',
    backgroundColor: '#1F1F1F',
    color: 'white',
}))

export const FooterWrapper = styled(Box)(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    paddingTop: '80px',
}))

export const ItemWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '80px',
}))

export const Title = styled(Box)(() => ({
    fontWeight: '700',
    fontSize: '14px',
    textTransform: 'uppercase',
    marginBottom: '26px',
}))

export const StyledMenuItem = styled(MenuItem)(() => ({
    fontWeight: '400',
    fontSize: '14px',
    paddingLeft: '0 !important',
    color: '#FAFAFA !important',
    borderRadius: '30px important',
}))