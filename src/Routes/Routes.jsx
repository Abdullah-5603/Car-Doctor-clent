import {createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";


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
                element: <PrivateRoutes><CheckOut/></PrivateRoutes>,
                loader: ({params}) => fetch(`https://car-doctor-server-abdullah-5603.vercel.app/services/${params.id}`)
            },
            {
                path: 'serviceDetails/:id',
                element: <ServiceDetails/>,
                loader: ({params}) => fetch(`https://car-doctor-server-abdullah-5603.vercel.app/services/${params.id}`)
            },
            {
                path: 'bookings',
                element: <PrivateRoutes><Bookings/></PrivateRoutes>
            }
        ]
    }
])

export default router;