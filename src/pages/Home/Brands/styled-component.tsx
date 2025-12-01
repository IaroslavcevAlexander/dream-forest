import { Box, styled } from "@mui/material";

export const BrandsWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    margin: '0 auto',
    marginTop: '80px',
    marginBottom: '80px',
}))

export const BrandWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '285px',
    height: '113px',
    backgroundColor: theme.palette.secondary.contrastText,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}))

export const BrandLogo = styled('img')(() => ({
}))