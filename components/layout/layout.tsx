import React from "react";
import { Header } from "./header";
const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout;