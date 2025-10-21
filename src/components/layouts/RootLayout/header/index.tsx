import { Box, IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Inner from "../../../Inner/Inner";


const Root = styled(Box)(({ theme }) => ({
    color: theme.palette.common.white,
}))

const First = styled(Box)(() => ({
    display: "flex",
    alignItems: "center", 
    gap: "30px",
}))

const Last = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",  
    gap: "30px",
}))

const StyledLink = styled(Box)(({ theme }) => ({
    textDecoration: 'none',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.black,
    fontWeight: 400,
    gap: '8px',
}))

const Header = () => {
    return(
        <Root>
            <Inner 
            display="flex"
            justifyContent="space-between"
            alignItems="center"   
            gap="30px"
            >  
                <First>
                    <Box component="img" src="img/icons/dream forest big.svg" alt="logo-dream-forest" />

                    <IconButton
                        sx={{
                            background: '#F6F6F6',
                            width: "75px",
                            height: "70px",
                            borderRadius: "0",
                            padding: '0px',
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
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