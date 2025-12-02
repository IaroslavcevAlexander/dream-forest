import { Box, styled, Button } from "@mui/material"

export const Root = styled(Box)(({ theme }) => ({
    background: theme.palette.secondary.contrastText,
    width: '100%',
}))

export const CatsWrapper = styled(Box)(() => ({
    display: 'flex',
    gap: '21px',
    paddingTop: '82px',
    paddingBottom: '82px',
}))

export const CatItem = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'end', 
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '430px',
    width: '100%',
    '&:nth-of-type(2)': {
        boxShadow: '0px 0px 15px 10px #0000000D',
    },
}))

export const Btn = styled(Button)(({ theme }) => ({
    borderRadius: '50px',
    backgroundColor: 'white',
    fontWeight: '700',
    fontSize: '12px',
    color: 'black',
    height: '45px',
    margin: '0 0 30px 30px',
    padding: '0 81px 0 35px',
    textTransform: 'uppercase',
    transition: '0.19s',
    '&::after': {
        content: '""',
        position: 'absolute',
        right: '35px',
        width: '20px',
        height: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundImage: 'url("/img/right-arrow 2.svg")'
    },
    ':hover': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        '&::after': {
            backgroundImage: 'url("/img/right-arrow 1.svg")'
        }
    }
}))