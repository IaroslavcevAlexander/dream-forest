import styled from "styled-components";
import { Box } from "@mui/material";

export const BrandsWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    margin: '0 auto',
    marginTop: '80px',
    marginBottom: '80px',
}))

export const BrandWrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '285px',
    height: '113px',
    backgroundColor: '#FAFAFA',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}))

export const BrandLogo = styled('img')(() => ({
}))