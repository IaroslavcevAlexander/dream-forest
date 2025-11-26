import { Slider } from "@mui/material";
import { styled } from '@mui/material/styles';


export const SliderPrice = styled(Slider)(({ theme }) => ({
    color: theme.palette.primary.main,

  '& .MuiSlider-track': {
    backgroundColor: theme.palette.primary.main,
    height: 0.5,
    borderRadius: 3,
  },

  '& .MuiSlider-rail': {
    backgroundColor: theme.palette.primary.main,
    height: 1,
    borderRadius: 3,
  },

  '& .MuiSlider-thumb': {
    width: 13,
    height: 13,
    backgroundColor: theme.palette.primary.main,
  },
}))

