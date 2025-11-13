import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const BanerWrapper = styled(Box)(() => ({
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '182px',
    height: '182px',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 29.17%, #383838 100%)',
    cursor: 'pointer',
}))

export const BanerItemWrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '90px',
    position: 'absolute',
    bottom: '0',
    left: '15px',
}))

export const PricesWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '14px',
}))

export const OldPrice = styled(Box)(() => ({
    display: 'flex !important',
    flexDirection: 'row',
    gap: '2px',
    color: '#FF4A4A',
    fontWeight: '450',
    fontSize: '10px',
    textDecoration: 'line-through',
}))

export const Price = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '2px',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: '12px',
}))

export const BanerBtn = styled(Button)(() => ({
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',    
    width: '18px !important',
    height: '18px !important',
    padding: '0 !important',
    borderRadius: '50% !important',
    backgroundColor: '#FFFFFF !important',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    minWidth: 'unset !important',
}))