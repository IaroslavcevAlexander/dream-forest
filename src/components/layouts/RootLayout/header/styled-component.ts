import { Box, IconButton, styled } from "@mui/material"

export const Root = styled(Box)(({ theme }) => ({
    color: theme.palette.common.white,
}))

export const First = styled(Box)(() => ({
    display: "flex",
    alignItems: "center", 
    gap: "30px",
    cursor: 'pointer',
}))

export const Last = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",  
    gap: "30px",
    fontWeight: 400,
    cursor: 'pointer',
}))

export const StyledLink = styled(Box)(({ theme }) => ({
    textDecoration: 'none',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.black,
    fontWeight: 400,
    gap: '8px',
    margin: '0',
}))

export const Item = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    padding: "11px 0",
    paddingLeft: '14px',
    cursor: 'pointer',
    color: theme.palette.common.black,
}))


export const IconBtn = styled(IconButton)(() => ({
    background: '#F6F6F6',
    width: "75px",
    height: "70px",
    borderRadius: "0",
    padding: '0px',
})) 