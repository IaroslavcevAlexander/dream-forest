import { Box, Button, styled } from "@mui/material"

export const ProductCadrWrapper = styled(Box)(() => ({
    boxShadow: '0px 1px 30px 1px #0000000D',
}))

export const BtnWrapper = styled(Box)(() => ({
    display: 'flex',
    gap: '4px',
    margin: '15px 0 0 15px',
}))

export const Btn = styled(Button)<{ active?: boolean }>(({ active, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30px',
  height: '30px',
  borderRadius: '50% !important',
  padding: 0,
  minWidth: 0,
  boxShadow: 'none',
  transition: '0.2s ease',

  backgroundColor: active
    ? theme.palette.error.main
    : theme.palette.secondary.main,

  '&:hover': {
    backgroundColor: active
      ? theme.palette.primary.dark ?? theme.palette.primary.main
      : theme.palette.secondary.dark ?? theme.palette.secondary.main,
  },
}));

export const ImgCard = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
}))

export const DescWrapper = styled(Box)(() => ({
    padding: '15px',
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