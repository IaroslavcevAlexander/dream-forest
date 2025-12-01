import Inner from '../../../../Inner/Inner';
import { Root, Item, DeliveryIcon, Line, Link, Phone, SettingsIcons } from './styled-component';

const HeaderTop = () => {
    return(
        <Root>
            <Inner 
                display="flex"
                justifyContent="end" 
                alignItems="center"  
                gap="30px"
            >
                <Phone href="tel:+37367114339">
                    <Item>0 67 114-339</Item>
                </Phone>

                <Line />

                <Link to="delivery">
                    <DeliveryIcon>
                        <Item>Доставка</Item>
                    </DeliveryIcon>
                </Link>
                 
                <Line />

                <Link to="settings">
                    <Item>
                        Русский
                        <SettingsIcons marginLeft='7px' />
                    </Item>
                </Link>
            </Inner> 
        </Root>

    )
}
export default HeaderTop;