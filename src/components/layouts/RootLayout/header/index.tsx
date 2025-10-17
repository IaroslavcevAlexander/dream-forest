import { Box, IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Inner from "../../../Inner/Inner";

const GridContainer = styled(Box)(({ theme }) =>({
    backgroundColor: theme.palette.common.white,
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    gap: theme.spacing(2),
    width: "100%",
    margin: '0 auto',
    padding: theme.spacing(1, 3),
}))

const LeftBlock = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "8px",
});

const CentralBlock = styled(Box)({
    width: "100%",
});

const RightBlock = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "30px",
});

const StyledLink = styled(Box)(({ theme }) => ({
    textDecoration: 'none',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.black,
    fontWeight: 400,
}))

const Header = () => {
    return(
        <Inner>
            <GridContainer>
                <LeftBlock>
                    <img src="img/icons/dream forest big.svg" alt="logo-dream-forest" />

                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </LeftBlock>

                <CentralBlock>
                    <input type="text" />
                </CentralBlock>

                <RightBlock>
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
                </RightBlock>
            </GridContainer>
        </Inner>
    )
}
export default Header;