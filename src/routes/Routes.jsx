import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import ErrorPage from "../Pages/ErrorPage";
import AddToys from "../Pages/Admin/AddToys";
import ProtectedRoute from "./ProtectedRoute";
import MyToys from "../Pages/Admin/MyToys";
import AllToys from "../Pages/AllToys";
import UpdateToy from "../Pages/Admin/UpdateToy";
import SinglePage from "../Pages/Admin/SinglePage";
import Blog from "../Pages/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
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
                path: '/all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: '/add-toy',
                element: <ProtectedRoute><AddToys></AddToys></ProtectedRoute>
            },
            {
                path: '/my-toy',
                element: <ProtectedRoute><MyToys></MyToys></ProtectedRoute>
            },
            {
                path: '/updateToy/:id',
                element:  <ProtectedRoute><UpdateToy></UpdateToy></ProtectedRoute>,
                loader: ({params})=>fetch(`https://educational-toys-server.vercel.app/toy/${params.id}`)
            },
            {
                path: '/single/:id',
                element: <ProtectedRoute><SinglePage></SinglePage></ProtectedRoute>,
                loader: ({params})=>fetch(`https://educational-toys-server.vercel.app/toy/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]
    }
])


export default router;