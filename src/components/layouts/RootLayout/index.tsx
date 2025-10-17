import { Fragment, type FC, type JSX } from "react";
import { Outlet } from "react-router-dom";
// import Menu from "./menu"
import HeaderTop from "./header/HeaderTop"
import Header from "./header/index"

interface Props {
    children: JSX.Element
}

const Layout: FC<Props> = ({ children }) => {
    console.log("papipups")
    return(
        <Fragment>
            <HeaderTop />
            <Header />
            {/* <Menu /> */}
            <Outlet />
            {children}
        </Fragment>
    )
}
export default Layout;