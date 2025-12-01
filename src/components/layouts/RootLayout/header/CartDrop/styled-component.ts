import { Box, Button } from "@mui/material"
import styled from "styled-components"

export const CartDropWrapper = styled(Box)(() => ({
    position: 'absolute',
    top: '100px !important',
    right: '170px',
    width: '270px !important',
    boxShadow: '0px 4px 10px 0px #0000000D',
    color: '#333333',
    zIndex: '1',
    backgroundColor: '#EDEDED !important',
}))

export const ItemWrapper = styled(Box)(() => ({
    maxHeight: '212px !important',
    marginBottom: '117px',
    overflow: 'auto',
    '&::-webkit-scrollbar': { width: 0 },
}))

export const Item = styled(Box)(() => ({
    display: 'flex',
    padding: '19px 19px',
    borderTop: '10px solid !important',
    borderColor: '#ECECEC',
    backgroundColor: '#F6F6F6',
    boxShadow: '0px 4px 10px 0px #0000000D',
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
    fontSize: '14px',
}))

export const Size = styled(Box)(() => ({
    fontWeight: '400',
    fontSize: '14px',
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

export const DownPanel = styled(Box)(() => ({
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#EDEDED !important',
}))

export const TotalPrice = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '400',
    fontSize: '15px',
    color: '#333333',
    padding: '12px 0',
    textTransform: 'uppercase',
    backgroundColor: '#F2F2F2',
    boxShadow: '0px -5px 10px 0px #00000008',
}))

export const BtnWrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    margin: '20px 0',
}))

export const Btn = styled(Button)(() => ({
    borderRadius: '30px !important',
    fontWeight: '600 !important',
    fontSize: '10px !important',
    backgroundColor: 'white !important',
    padding: '11px 17px !important',
    color: '#333333 !important',  
    letterSpacing: '1px !important',
    lineHeight: '10px !important'
}))