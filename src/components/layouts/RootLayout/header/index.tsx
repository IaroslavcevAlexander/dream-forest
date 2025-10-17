import { Box, IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Inner from "../../../Inner/Inner";

const GridContainer = styled(Box)(({ theme }) =>({
    backgroundColor: theme.palette.common.white,
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: theme.spacing(2),
    alignItems: "center",
    margin: '0 auto',
}))

const GridInner = styled(Inner)(({ theme }) => ({
    display: 'grid',
    gridAutoFlow: 'column',
    alignItems: 'center',
    justifyContent: 'end',
    gap: theme.spacing(3),
    margin: '0 auto',
}))

const StyledLink = styled(Box)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.common.black,
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
}))

const FavoritProfileTrash = styled(Box)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.common.black,
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
}))

const Header = () => {
    return(
        <Inner>
            <GridContainer>
                <GridInner>
                    <img src="img/icons/dream forest big.svg" alt="logo-dream-forest" />

                    <IconButton>
                        <MenuIcon />
                    </IconButton>

                    <input type="text" />

                    <FavoritProfileTrash>
                        <Box>
                            <img src="img/icons/profile icon man.svg" alt="Profile" />
                            <p>Профиль</p>
                        </Box>

                        <StyledLink>
                            <Box>
                                <img src="img/icons/heart favorites.svg" alt="Profile" />
                                <p>Избранное</p>
                            </Box>
                        </StyledLink>

                        <StyledLink>
                            <Box>
                                <img src="img/icons/shopping cart.svg" alt="Profile" />
                                <p>Корзина</p>
                            </Box>
                        </StyledLink>
                    </FavoritProfileTrash>
                </GridInner>
            </GridContainer>
        </Inner>
    )
}
export default Header;