import { Box, Button, styled } from "@mui/material"
import type { ButtonAlign, ButtonBg } from "../../../redux/api/baners/types"


export const Root = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    backgroundColor: theme.palette.common.white,
}))

export const BanersWrapper = styled(Box)(() => ({
    display: 'flex',
    gap: '26px',
}))

export const BanerWrapper  = styled(Box)(() => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    height: '416px',
    width: '100%',
    backgroundRepeat: 'no-repeat',    
}))

export const BanerTitle = styled(Box)(({ theme }) => ({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    fontWeight: '800',
    color: theme.palette.common.white,
    fontSize: '30px',
    marginLeft: '50px',
    bottom: '122px',
    textTransform: 'uppercase',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    textAlign: 'left',
    maxWidth: '350px', 
}))

export const Btn = styled(Button)<{ $align?: ButtonAlign, $backgroundColor?: ButtonBg }>(
    ({ $align, $backgroundColor, theme }) => ({
    position: 'absolute',
    display: 'flex',
    bottom: "50px",
    borderRadius: "50px",
    padding: "15px 35px",
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: '12px',
    lineHeight: '12px',
    font: 'Futura PT',
    ...( $align === "right" 
      ? { right: "50px" } 
      : { left: "50px" }
    ),
    ...( $backgroundColor === "white"
        ? { backgroundColor: theme.palette.common.white, color: theme.palette.text.primary }
        : { backgroundColor: theme.palette.text.primary, color: theme.palette.common.white }
    )
}))