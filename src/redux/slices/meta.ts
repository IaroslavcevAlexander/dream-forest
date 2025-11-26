import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export const metaSlice = createSlice({
  name: 'meta',
  initialState: {
    menuOpen: false,
    cartOpen: false,
  },
  reducers: {
    toggleMenu: (state, actions) => {
      state.menuOpen = actions.payload
    },
    toggleCartPanel: (state, actions) => {
      state.cartOpen = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleMenu, } = metaSlice.actions
export const { toggleCartPanel, } = metaSlice.actions


export const selectIsMenuOpen = (state: RootState) => state.meta.menuOpen
export const selectIsCartOpen = (state: RootState) => state.meta.cartOpen

export default metaSlice.reducer