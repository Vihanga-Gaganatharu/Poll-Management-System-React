import './App.css'
import {createBrowserRouter} from "react-router";
import {RootLayout} from "./components/layout/RootLayout.tsx";
import {NotFoundLayout} from "./components/layout/NotFoundLayout.tsx";
import {RouterProvider} from "react-router/dom";

function App() {
    const route = createBrowserRouter([
        {
            path: '',
            element: <RootLayout/>,
            children: [
                {path: '/customer', element: <h1>customer</h1>},
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
