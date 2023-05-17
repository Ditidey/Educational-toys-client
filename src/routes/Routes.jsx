import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])


export default router;