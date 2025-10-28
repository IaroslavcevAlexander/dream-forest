import { Box, styled, Button } from "@mui/material"

export const Root = styled(Box)(() => ({
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
}))

export const Btn = styled(Button)(() => ({
    borderRadius: '50px',
    backgroundColor: 'white',
    color: 'black',
    height: '45px',
    margin: '0 0 30px 30px',
    padding: '0 81px 0 35px',
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
        backgroundColor: '#C3A578',
        color: 'white',
        '&::after': {
            backgroundImage: 'url("/img/right-arrow 1.svg")'
        }
    }
}))