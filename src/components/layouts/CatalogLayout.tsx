import { type FC, type JSX } from "react";
import { Outlet } from "react-router-dom";

interface Props {
    children: JSX.Element
}

const CatalogLayout: FC<Props> = ({ children }) => {
    return(
        <div className="p">
            Welcome to the Catalog!
            <Outlet />
            {children}
        </div>
    )
}
export default CatalogLayout;