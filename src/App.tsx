import './App.css'
import {createBrowserRouter, Navigate} from "react-router";
import {RootLayout} from "./components/layout/RootLayout.tsx";
import {NotFoundLayout} from "./components/layout/NotFoundLayout.tsx";
import {RouterProvider} from "react-router/dom";
import {UserSignInPage} from "./pages/UserSignInPage.tsx";
import {UserSignUpPage} from "./pages/UserSignUpPage.tsx";
import {DashboardPage} from "./pages/DashboardPage.tsx";

function App() {
    const route = createBrowserRouter([
        {
            path: '',
            element: <RootLayout/>,
            children: [
                { path: '', element: <Navigate to="/signin" replace /> },
                { path : '/signin', element : <UserSignInPage/>},
                { path : '/signup', element : <UserSignUpPage/>},
                { path : '/dashbord', element : <DashboardPage/>},
            ],

        },
        {
            path: '*',
            element: <NotFoundLayout/>,
        }

    ])
  return (
    <>
        <RouterProvider router={route}/>

    </>
  )
}

export default App
