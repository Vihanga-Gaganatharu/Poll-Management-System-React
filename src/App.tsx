import './App.css'
import {createBrowserRouter, Navigate} from "react-router";
import {RootLayout} from "./components/layout/RootLayout.tsx";
import {NotFoundLayout} from "./components/layout/NotFoundLayout.tsx";
import {RouterProvider} from "react-router/dom";
import {UserSignInPage} from "./pages/UserSignInPage.tsx";

function App() {
    const route = createBrowserRouter([
        {
            path: '',
            element: <RootLayout/>,
            children: [
                { path: '', element: <Navigate to="/signin" replace /> },
                { path : '/signin', element : <UserSignInPage/>},
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
