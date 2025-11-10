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
    backgroundColor: '#fff',
    padding: "11px 0",
    paddingLeft: '14px',
    borderBottom: '1px solid',
    borderColor: '#E7E7E7',
    '&:hover': {
        backgroundColor: '#F6F6F6',
    }
}))

export const CategoryImg = styled('img')(() => ({
    marginRight: '8px',
}))

export const MenuWrapper = styled(Box)(() => ({
    color: '#333333',
    position: 'absolute',
    width: '196px',
}))


export const SubItem = styled(Box)(() => ({
    position: 'absolute',
    backgroundColor: '#F6F6F6',
    padding: "0 0 0 0",
    top: '0',
    left: '196px',
    width: '488px',
}))

export const SubBox = styled(Box)(() => ({
    backgroundColor: '#fff',
    color: '#000000',
    padding: '30px 0 21px 30px',
    fontWeight: '700',
    fontSize: '12px',
    textTransform: 'uppercase',
    boxShadow: '-2px 0px 10px 0px #0000000D',

}))


