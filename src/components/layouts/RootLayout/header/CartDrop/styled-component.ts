import { Box } from "@mui/material"
import styled from "styled-components"

export const CartDropWrapper = styled(Box)(() => ({
    position: 'absolute',
    top: '119px',
    color: '#333333',
    width: '247px',
    backgroundColor: '#F6F6F6',
    boxShadow: '0px 4px 10px 0px #0000000D',
}))

export const ItemWrapper = styled(Box)(() => ({
    display: 'flex',
    padding: '19px 19px',
    borderBottom: '1px solid',
    borderColor: '#ECECEC',
}))

export const Img = styled('img')(() => ({
    marginRight: '12px',
    width: '57px',
    height: '57px',
    backgroundColor: '#FFFFFF',
}))

export const Items = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
}))


export const Title = styled(Box)(() => ({
    fontWeight: '500',
    fontSize: '16px',
}))

export const Size = styled(Box)(() => ({
    fontWeight: '400',
    fontSize: '16px',
    color: '#ADADAD',
}))

export const PriceWrapper = styled(Box)(() => ({
    display: 'flex',
}))

export const Price = styled(Box)(() => ({
    fontWeight: '400',
    fontSize: '16px',
    color: '#C3A578',
}))

