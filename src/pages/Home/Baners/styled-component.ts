import { Box, Button, styled } from "@mui/material"
import type { ButtonAlign, ButtonColor } from "./Baner"

export const Root = styled(Box)(() => ({
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
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

export const BanerTitle = styled(Box)(() => ({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    fontWeight: '800',
    color: '#FFFFFF',
    fontSize: '30px',
    marginLeft: '50px',
    bottom: '122px',
    textTransform: 'uppercase',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    textAlign: 'left',
    maxWidth: '350px', 
}))

export const Btn = styled(Button)<{ $align?: ButtonAlign, $backgroundColor?: ButtonColor }>(
    ({ $align, $backgroundColor }) => ({
    position: 'absolute',
    display: 'flex',
    bottom: "50px",
    borderRadius: "50px",
    height: "45px",
    padding: "0 35px",
    ...( $align === "right" 
      ? { right: "50px" } 
      : { left: "50px" }
    ),
    ...( $backgroundColor === "light"
        ? { backgroundColor: 'white', color: 'black' }
        : { backgroundColor: '#333333', color: 'white' }
    )
}))