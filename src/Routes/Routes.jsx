import {createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signUp',
                element: <SignUp/>
            },
            {
                path : 'checkOut/:id',
                element: <CheckOut/>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: 'serviceDetails/:id',
                element: <ServiceDetails/>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            }
        ]
    }
])

export default router;