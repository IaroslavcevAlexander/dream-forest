import { Box } from "@mui/material";
import styled from "styled-components";

export const Root = styled(Box)(() => ({
    width: '100%',
    backgroundColor: '#FAFAFA',
}))

export const BanerWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
}))

export const DescWrapper = styled(Box)(() => ({
    position: 'absolute',
    left: '200px',
    backgroundColor: '#FFFFFF',
    width: '468px',
}))

export const Title = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    margin: '25px 0 0 25px',
    fontWeight: '700',
    fontSize: '25px',
    color: '#333333',
}))

export const Desc = styled(Box)(() => ({
    margin: '20px 0 19px 25px',
    fontWeight: '400',
    color: '#9D9D9D',
    fontSize: '16px',
}))

export const BanerImg = styled('img')(() => ({
    objectFit: 'cover',
    objectPosition: 'center',
}))