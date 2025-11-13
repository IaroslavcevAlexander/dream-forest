import { Box } from "@mui/material"
import { styled } from "@mui/material/styles";

export const Root = styled(Box)(({ theme }) => ({
    color: theme.palette.common.white,
}))

export const First = styled(Box)(() => ({
    display: "flex",
    alignItems: "center", 
    gap: "30px",
}))

export const Last = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",  
    gap: "30px",
    fontWeight: 400,
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
}))

export const Item = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: "11px 0",
    paddingLeft: '14px',
    borderBottom: '1px solid',
    borderColor: '#E7E7E7',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#F6F6F6',
    }
}))
