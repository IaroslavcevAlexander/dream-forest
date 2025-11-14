import { Box } from "@mui/material"
import styled from "styled-components"

export const MenuWrapper = styled(Box)(() => ({
    color: '#333333',
    position: 'absolute',
    width: '196px',
}))

export const CategoryImg = styled('img')(() => ({
    marginRight: '8px',
}))

export const SubItemWrapper = styled(Box)(() => ({
    display: 'flex',
    gap: '137px',
    position: 'absolute',
    backgroundColor: '#F6F6F6',
    top: '0',
    left: '196px',
    width: '488px',
    cursor: 'auto',
    boxShadow: '-2px 0px 10px 0px #0000000D',
}))

export const SubItem = styled(Box)(() => ({
}))

export const SubBox = styled(Box)(() => ({
    color: '#000000',
    padding: '15px 0 0 30px',
    fontWeight: '700',
    fontSize: '12px',
    textTransform: 'uppercase',
    cursor: 'default',
    marginTop: '15px',  
}))

export const BanerItem = styled(Box)(() => ({
    marginBottom: '34px',
    marginTop: '34px',
}))

export const NameWrapper = styled(Box)(() => ({
    color: '#909090',
    fontWeight: '400',
    fontSize: '14px',
    textTransform: 'none',
    cursor: 'pointer',
}))

export const Сorner = styled(Box)(() => ({
    position: 'absolute',
    right: '5px',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',    
    width: '18px !important',
    height: '18px !important',
    padding: '0 !important',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    minWidth: 'unset !important',
}))
