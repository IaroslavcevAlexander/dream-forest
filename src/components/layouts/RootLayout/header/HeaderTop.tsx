// import { NavLink } from "react-router-dom";

import { Box } from "@mui/material";

const HeaderTop = () => {
    return(
        <Box component="nav">
            <Box component="a"
                href="tel+37367 114-339"
                className="phone-number">
                0 67 114-339
            </Box>

            {/* <NavLink
                to={}
                className="delivery">
                Доставка
            </NavLink>

            <NavLink
                // to={}
                className="language">
                Русский
            </NavLink> */}
        </Box>
    )
}
export default HeaderTop;
