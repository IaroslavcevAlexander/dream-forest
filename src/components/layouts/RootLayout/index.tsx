import { Fragment, type FC, type JSX } from "react";
import { Outlet } from "react-router-dom";
// import Menu from "./menu"
import HeaderTop from "./Header/HeaderTop"
import Header from "./Header/index"

interface Props {
    children: JSX.Element
}

const Layout: FC<Props> = ({ children }) => {
    console.log("papipups")
    return(
        <Fragment>
            <HeaderTop />
            <Header />
            <Outlet />
            {children}
        </Fragment>
    )
}
export default Layout;