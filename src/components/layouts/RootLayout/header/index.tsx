import { Box, TextField, } from "@mui/material";
import Inner from "../../../Inner/Inner";
import { useNavigate } from "react-router-dom";
import { First, IconBtn, Last, Root, StyledLink } from "./styled-component";
import Menu from "./Menu"
import { data as categories } from "../Header/Menu/data";
import { data as cart } from "../Header/CartDrop/data";
import CartDrop from "./CartDrop";
import { MenuWrapper } from "./Menu/styled-components";
import { CartDropWrapper } from "./CartDrop/styled-component";

import { toggleMenu, toggleCartPanel, selectIsMenuOpen, selectIsCartOpen } from '../../../../redux/slices/meta'
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";


const Header = () => {
    const navigate = useNavigate();
    const isMenuOpen = useAppSelector(selectIsMenuOpen)
    const isCartOpen = useAppSelector(selectIsCartOpen)
    const dispatch = useAppDispatch()

    return(
        <Root>
            <Inner 
                display="flex"
                justifyContent="space-between"
                alignItems="center"   
                gap="30px"
            >  
                <First>
                    <Box component="img" 
                        src="/img/icons/dream forest big.svg" 
                        alt="logo-dream-forest" 
                        onClick={() => navigate("/")}
                    />

                    <Box
                        onMouseOver={() => dispatch(toggleMenu(true))}
                        onMouseLeave={() => dispatch(toggleMenu(false))}
                    >
                        <IconBtn>   
                            <Box component="img" src="/img/icons/menu burger.svg" alt="menu" />
                        </IconBtn>
                        {isMenuOpen   && (      
                            <MenuWrapper>
                                <Menu data={ categories }/>   
                            </MenuWrapper>
                        )}  
                    </Box>
                </First>

                <TextField type="text" placeholder="Поиск..."/>

                <Last>
                    <StyledLink>
                        <Box component="img" src="/img/icons/profile icon man.svg" alt="Profile" />
                        <Box>Профиль</Box>
                    </StyledLink>

                    <StyledLink>
                            <Box component="img" src="/img/icons/heart favorites.svg" alt="Profile" />
                            <Box>Избранное</Box>
                    </StyledLink>

                    <Box
                        onMouseOver={() => dispatch(toggleCartPanel(true))}
                        onMouseLeave={() => dispatch(toggleCartPanel(false))}
                    >
                        <StyledLink>
                            <Box
                                component="img"
                                src="/img/icons/shopping cart.svg"
                                alt="Cart"
                            />
                            
                            <Box>Корзина</Box>
                        </StyledLink>

                        {isCartOpen && (
                        <CartDropWrapper>
                            <CartDrop data={cart} />
                        </CartDropWrapper>
                        )}
                    </Box>
                </Last>
            </Inner>
        </Root>
    )
}
export default Header;