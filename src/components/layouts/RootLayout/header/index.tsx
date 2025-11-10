import { Box, IconButton } from "@mui/material";
import Inner from "../../../Inner/Inner";
import { useNavigate } from "react-router-dom";
import { First, Last, MenuWrapper, Root, StyledLink } from "./styled-component";
import Menu from "./Menu"
import { data as categories } from "../Header/data";
import { useState } from "react";



const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

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
                    src="img/icons/dream forest big.svg" 
                    alt="logo-dream-forest" 
                    onClick={() => navigate("/")}
                    />

                    <Box
                        onMouseOver={() => setOpen(true)}
                        onMouseOut={() => setOpen(false)}
                    >
                        <IconButton
                            sx={{
                                background: '#F6F6F6',
                                width: "75px",
                                height: "70px",
                                borderRadius: "0",
                                padding: '0px',
                            }}
                        >   

                            <Box component="img" src="/img/icons/menu burger.svg" alt="menu" />

                        </IconButton>
                        {open && (      
                            <MenuWrapper>
                                <Menu data={ categories }/>   
                            </MenuWrapper>
                        )}  
                    </Box>
                </First>

                <Box component="input" type="text" placeholder="Поиск..." style={{
                    height: '36px',
                    width: '100%',
                    marginLeft: '15px',
                    border: '1px solid',
                    borderRadius: '20px', 
                    borderColor: '#ECECEC',
                    color: '#BABABA',
                    fontSize: '14px',
                    fontWeight: 400,
                    paddingLeft: '25px',
                }}/>

                <Last>
                    <StyledLink>
                        <Box component="img" src="img/icons/profile icon man.svg" alt="Profile" />
                        <Box>Профиль</Box>
                    </StyledLink>

                    <StyledLink>
                            <Box component="img" src="img/icons/heart favorites.svg" alt="Profile" />
                            <Box>Избранное</Box>
                    </StyledLink>

                    <StyledLink>
                            <Box component="img" src="img/icons/shopping cart.svg" alt="Profile" />
                            <Box>Корзина</Box>
                    </StyledLink>
                </Last>
            </Inner>
        </Root>
    )
}
export default Header;