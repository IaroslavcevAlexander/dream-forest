import Inner from "../../../../Inner/Inner"
import { Item, Line, Root, SubFootWrapper, SubItem, SubItemWrapper } from "../SubFooter/styled-components"

const SubFooter = () => {
    return(
        <Root>
            <Inner>
                <SubFootWrapper>
                    <Item>@ 2021 dreamforest.md</Item>

                    <SubItemWrapper>
                        <SubItem>Конфиденциальность и cookie-файлы</SubItem>
                        <Line/>
                        <SubItem>Правила и условия</SubItem>
                    </SubItemWrapper>
                </SubFootWrapper>
            </Inner>
        </Root>
    )
}

export default SubFooter