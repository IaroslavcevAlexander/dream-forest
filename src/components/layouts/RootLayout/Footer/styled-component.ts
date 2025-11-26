import { Box } from "@mui/material";
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
    padding: '80px 0',
}))

export const ItemWrapper = styled(Box)(() => ({
    display: 'flex',
    paddingBottom: '80px',
}))

export const FooterItemWrapper = styled(Box)(() => ({
    display: "flex",
    gap: '18px',
    flexDirection: 'column',
}))

export const Title = styled(Box)(() => ({
    fontWeight: '700',
    fontSize: '14px',
    textTransform: 'uppercase',
    marginBottom: '12px',
}))

export const FooterItem = styled(Box)(() => ({
    fontWeight: '400',
    fontSize: '14px',
    paddingLeft: '0 !important',
    color: '#FAFAFA !important',
}))

export const ImgEmailWrapper = styled('a')(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
}))

export const Email = styled('span')(() => ({
    fontWeight: '400',
    fontSize: '14px',
    paddingLeft: '0 !important',
    color: '#FAFAFA !important',
}))

export const Tel = styled('a')(() => ({
    fontWeight: '500',
    fontSize: '14px',
    paddingLeft: '0 !important',
    color: '#FAFAFA !important',
    textDecoration: 'none',
}))