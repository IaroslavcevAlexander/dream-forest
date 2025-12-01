import { Box, styled } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    boxShadow: '5px 0px 10px 0px #00000005',
    position: 'relative',
}))