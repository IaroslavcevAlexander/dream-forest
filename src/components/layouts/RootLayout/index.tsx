import { Fragment, type FC, type JSX } from "react";
import { Outlet } from "react-router-dom";
import HeaderTop from "./Header/HeaderTop/index";
import Header from "./Header/index";
import Footer from "./Footer";
import { data } from "./Footer/data";

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
            <Footer data={data}/>
        </Fragment>
    )
}
export default Layout;