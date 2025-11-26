import { Box } from "@mui/material";
import styled from "styled-components";

export const Root = styled(Box)(() => ({
    width: '100%',
    backgroundColor: '#F0F0F0',
    color: '#333333',
}))

export const SubFootWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
}))

export const Item = styled(Box)(() => ({
    display: 'flex',
    padding: '19px 0 19.50px 0',
    fontWeight: '700 !important',
    color: '#333333',
    borderRadius: '30px important',
}))

export const SubItem = styled(Box)(() => ({
    display: 'flex',
    padding: '19px 0 19.50px 0 !important',
    fontWeight: '700',
    color: '#333333',
    borderRadius: '30px important',
}))

export const SubItemWrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

export const Line = styled(Box)(() => ({
    display: 'flex',
    width: '1px',
    height: '13px',
    backgroundColor: '#9A9A9A',
    margin: '0 8px', 
}))