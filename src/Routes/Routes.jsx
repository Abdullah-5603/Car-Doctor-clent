import {createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <h1>baal</h1>
            }
        ]
    }
])

export default router;