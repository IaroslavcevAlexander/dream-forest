import { styled } from "@mui/material/styles";
import { Box } from "@mui/material"

const Inner = styled(Box)(({ theme }) => ({
    display: 'grid',
    maxWidth: '1200px',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: 'repeat(6, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
}))
export default Inner;