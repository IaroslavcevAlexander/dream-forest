import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

export const Root = styled(Box)(() => ({
    width: '100%',
}))

export const CardsWrapper = styled(Box)(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
}))

export const CadrWrapper = styled(Box)(() => ({
    width: '280px',
    margin: '0 auto',
    boxShadow: '0px 1px 30px 1px #0000000D',
}))

export const Title = styled(Box)(( _theme ) => ({
    textAlign: 'center',
    fontWeight: '700',
    color: '#333333',
    fontSize: '27px',
    marginBottom: '65px',
    marginTop: '80px',
}))

export const BtnWrapper = styled(Box)(() => ({
    display: 'flex',
}))

export const Btn = styled(Button)<{ active?: boolean }>(({ active }) => ({
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    width: '30px !important',
    height: '30px !important',
    borderRadius: '50%',
    padding: '0 !important',
    minWidth: 0,
    border: 'none',
    backgroundColor: active ? 'red' : 'white',
    cursor: 'pointer',
    marginLeft: '15px',
    marginTop: '15px',
    boxShadow: "0px 5px 20px 0px #0000001A",
    '& img': {
        width: '14px',
        height: '14px',
    },
}))

export const ImgCard = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
}))

export const DescWrapper = styled(Box)(() => ({
    marginLeft: '15px',
}))

export const Name = styled(Box)(() => ({
    fontWeight: '450',
    color: '#333333',
    fontSize: '16px',
    lineHeight: '22px',
}))

export const Desc = styled(Box)(() => ({
    fontWeight: '400',
    fontSize: '14px',
}))

export const Price = styled(Box)(() => ({
    color: '#C3A578',
    fontSize: '14px',
    marginTop: '13px',
    marginBottom: '15px',
}))