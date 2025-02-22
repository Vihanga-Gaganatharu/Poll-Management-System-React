import './App.css'
import {createBrowserRouter, Navigate} from "react-router";
import {RootLayout} from "./components/layout/RootLayout.tsx";
import {NotFoundLayout} from "./components/layout/NotFoundLayout.tsx";
import {RouterProvider} from "react-router/dom";
import {UserSignInPage} from "./pages/UserSignInPage.tsx";
import {UserSignUpPage} from "./pages/UserSignUpPage.tsx";
import {DashboardPage} from "./pages/DashboardPage.tsx";
import {StudentPage} from "./pages/StudentPage.tsx";
import {StaffPage} from "./pages/StaffDetailsPage.tsx";
import {ClassDetailsPage} from "./pages/ClassDetails.tsx";

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
                { path : '/students', element : <StudentPage/>},
                { path : '/staff', element : <StaffPage/>},
                { path : '?class', element : <ClassDetailsPage/>},

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
