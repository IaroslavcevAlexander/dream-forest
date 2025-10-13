import { Fragment, type FC, type JSX } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./menu"

interface Props {
    children: JSX.Element
}

const Layout: FC<Props> = ({ children }) => {
    console.log("papipups")
    return(
        <Fragment>
            <Menu />
            <Outlet />
            {children}
        </Fragment>
    )
}
export default Layout;