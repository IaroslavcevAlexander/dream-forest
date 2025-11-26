import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Root = styled(Box)(() => ({
    width: '100%',
}))

export const ProductsCardsWrapper = styled(Box)(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
}))
