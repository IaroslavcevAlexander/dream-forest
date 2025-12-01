import { Box, Button, styled } from "@mui/material";

interface BtnSortProps {
  $active?: boolean
}

export const CardsWrapper = styled(Box)(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
}))

export const FiltersCards = styled(Box)(() => ({
    display: 'flex',
    gap: '20px',
}))

export const FilterResult = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #EAEAEA',
    marginBottom: '30px',
    paddingBottom: '14px',
    cursor: 'pointer',
}))

export const SortIcon = styled('img')(() => ({
}))

export const BtnSortWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '7px',
    position: 'absolute',
    marginTop: '30px',
    marginLeft: '-33px',
    padding: '13px 26px 13px 17px',
    backgroundColor: theme.palette.common.white,
    borderRadius: '6px',
    boxShadow: '0px 1px 30px 0px #0000000D',
}))

export const BtnSort = styled(Button)<BtnSortProps>(({ $active, theme }) => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    fontSize: '12px',
    padding: '0 0',
    transition: '0.5s all',

    color: $active
        ? theme.palette.primary.main
        : theme.palette.text.primary,
}))

export const PagingWrapper = styled(Box)(() => ({
}))