import { Box, styled} from "@mui/material";

interface BtnProps {
  $active: boolean
  $size: FilterButtonSize
}

type FilterButtonSize = "small" | "medium" | "large";


export const Root = styled(Box)(({ theme }) => ({
  width: '100%',
  background: `linear-gradient(
    to right,
    ${theme.palette.common.white} 10%,
    ${theme.palette.secondary.contrastText} 20%
  )`,
}))

export const Wrapper = styled(Box)(() => ({
  width: '100%',
  display: 'grid', 
  gridTemplateColumns: '260px 1fr',
  gap: '50px',
}))

export const Btn = styled(Box)<BtnProps>(({ $active, $size, theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '400',
  fontSize: '14px',
  cursor: "pointer",
  LineHeight: '20px',

  padding:
    $size === "small"
      ? "6px 17px"
      : $size === "medium"
      ? "8px 25px"
      : "10px 30px",

  margin: '59px 0 50px 0',
  borderRadius: "20px",
  transition: "0.2s",
  backgroundColor: $active ? theme.palette.primary.main : theme.palette.primary.contrastText,
  color: $active ? theme.palette.primary.contrastText : theme.palette.text.primary,
  boxShadow: '0px 1px 30px 0px #0000000D'
}));