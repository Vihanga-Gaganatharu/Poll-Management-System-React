import {Signin} from "../../pages/auth/Signin.tsx";
import {Outlet} from "react-router";

export const RootLayout = () => {
    return (
        <>
            <Signin/>
            <Outlet/>
        </>
    );
};