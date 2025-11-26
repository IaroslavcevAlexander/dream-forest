import { Box } from "@mui/material";
import styled from "styled-components";

export const PriceWrapper = styled(Box)(() => ({
    display: 'flex',
}))

export const OldPrice = styled(Box)(() => ({
    color: '#C90D0D',
    fontWeight: '400',
    fontSize: '11px',
    marginTop: '13px',
    marginRight: '20px',
    // marginBottom: '10px',
    textDecoration: 'line-through',
}))

export const Price = styled(Box)(() => ({
    color: '#C3A578',
    fontWeight: '400',
    fontSize: '14px',
    marginTop: '13px',
    // marginBottom: '10px',
}))