import Inner from "../../../components/Inner/Inner"
import { HomeIcon, HomeWrapper, NavItem, NavWrapper, Root } from "./styled-component"

const Nav = () => {
    return(
        <Root>
            <Inner>
                <NavWrapper>

                    <HomeWrapper>
                        <HomeIcon src="/img/icons/HomeIcon.svg" alt="Home"/>
                        <NavItem>Главная</NavItem>
                    </HomeWrapper>/

                    <NavItem>Акксесуары</NavItem>/

                    <NavItem>Наручные часы</NavItem>

                </NavWrapper>
            </Inner>
        </Root>
    )
}

export default Nav