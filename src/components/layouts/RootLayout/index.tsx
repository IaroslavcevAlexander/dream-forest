import { Fragment, type FC, type JSX } from "react";
import { Outlet } from "react-router-dom";
// import Menu from "./menu"
import Header from "./header/HeaderTop"

interface Props {
    children: JSX.Element
}

const Layout: FC<Props> = ({ children }) => {
    console.log("papipups")
    return(
        <Fragment>
            <Header/>
            {/* <Menu /> */}
            <Outlet />
            {children}
        </Fragment>
    )
}
export default Layout;