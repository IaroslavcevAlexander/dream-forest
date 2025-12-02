import { Box, Checkbox, styled } from "@mui/material";

export const FiltersWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '9px',
    paddingRight: '21px',
    backgroundColor: theme.palette.common.white,
}))

export const Title = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    fontWeight: '700',
    fontSize: '14px',
    color: '#333333',
    marginTop: '40px',
    marginBottom: '29px',
    fontFamily: '"Roboto", sans-serif',
    textTransform: 'uppercase',
    '&::after':{
        content: "''",
        position: "absolute",
        bottom: '-10px',
        width: "90%",
        height: "2px",
        backgroundColor: theme.palette.secondary.main,
    },
}))

export const BtnWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: 'wrap',
    gap: '8px',
}))

export const SliderPriceWrapper = styled(Box)(() => ({
    padding: '0 40px 0 10px',
}))

export const PriceTextWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.background.paper,
    fontWeight: '700',
}))

export const ItemWrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'flex-end',
    gap: '5px',
}))

export const PriceText = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '700',
    fontSize: '12px',
    alignItems: 'center',
}))

export const StrapTypeWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',    
    fontWeight: '700',
    fontSize: '12px',
}))

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontFamily: 'Futura PT !important',
    fontWeight: '400',
    fontSize: '16px',
    leadingTrim: 'NONE',
    lineHeight: '26px',
    letterSpacing: '0%',
    verticalAlign: 'middle',

    '&:hover': {
        backgroundColor: 'transparent !important',
    },

    '&.Mui-checked .MuiSvgIcon-root': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        border: 'none !important'
    },
}));