import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import ErrorPage from "../Pages/ErrorPage";
import AddToys from "../Pages/Admin/AddToys";
import ProtectedRoute from "./ProtectedRoute";

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
            },
            {
                path: '/add-toy',
                element:  <ProtectedRoute><AddToys></AddToys></ProtectedRoute>
            }
        ]
    }
])


export default router;