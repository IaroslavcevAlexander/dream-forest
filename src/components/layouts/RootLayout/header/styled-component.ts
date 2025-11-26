import { Box, IconButton } from "@mui/material"
import { styled } from "@mui/material/styles";

export const Root = styled(Box)(({ theme }) => ({
    color: theme.palette.common.white,
}))

export const First = styled(Box)(() => ({
    display: "flex",
    alignItems: "center", 
    gap: "30px",
    cursor: 'pointer',
}))

// export const InputSearch = styled('input')(() => ({
//     display: "flex",
//     alignItems: "center", 
//     gap: "30px",
//     height: '36px',
//     width: '100%',
//     marginLeft: '15px',
//     border: '1px solid',
//     borderRadius: '20px', 
//     borderColor: '#ECECEC',
//     color: '#BABABA',
//     fontSize: '14px',
//     fontWeight: 400,
//     paddingLeft: '25px',
// }))

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


export const IconBtn = styled(IconButton)(() => ({
    background: '#F6F6F6',
    width: "75px",
    height: "70px",
    borderRadius: "0",
    padding: '0px',
})) 