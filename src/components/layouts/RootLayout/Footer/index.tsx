import { Box } from "@mui/material"
import Inner from "../../../Inner/Inner"
import { FooterWrapper, ItemWrapper, Root, StyledMenuItem, Title } from "./styled-component"
import SubFooter from "./SubFooter"

const Footer = () => {
    return(
        <Root>
            <Inner>
                <FooterWrapper>
                    <ItemWrapper>
                        <Title>Категории</Title>

                        <StyledMenuItem>Обувь</StyledMenuItem>
                        <StyledMenuItem>Одежда</StyledMenuItem>
                        <StyledMenuItem>Аксессуары</StyledMenuItem>
                    </ItemWrapper>

                    <ItemWrapper>
                        <Title>Информация</Title>

                        <StyledMenuItem>О нас</StyledMenuItem>
                        <StyledMenuItem>Оплата</StyledMenuItem>
                        <StyledMenuItem>Оформление заказа</StyledMenuItem>
                        <StyledMenuItem>Доставка</StyledMenuItem>
                        <StyledMenuItem>Нужна помощь</StyledMenuItem>
                    </ItemWrapper>

                    <ItemWrapper>
                        <Title>Мой Аккаунт</Title>

                        <StyledMenuItem>Корзина</StyledMenuItem>
                        <StyledMenuItem>Избранное</StyledMenuItem>
                        <StyledMenuItem>Мои заказы</StyledMenuItem>
                    </ItemWrapper>

                    <ItemWrapper>
                        <Title>Контакты</Title>

                        <StyledMenuItem>
                            <Box component={'img'} sx={{ marginRight: '8px', }} src="/img/icons/mail.svg" alt="mail"></Box>
                            info@dreamforest.md
                            </StyledMenuItem>
                        <StyledMenuItem>+(373) 67-114-339</StyledMenuItem>

                        <StyledMenuItem>
                            <Box component={'img'} src="/img/icons/visa MasterCard.svg" alt="ViSA MasterCard"></Box>
                        </StyledMenuItem>

                    </ItemWrapper>
                </FooterWrapper>
            </Inner>

            <SubFooter />
        </Root>
    )
}

export default Footer