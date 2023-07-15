import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import MainLayout from "../layouts/MainLayout"
import AllBooks from "../pages/AllBooks"
import Register from "../pages/Register"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/allBooks",
                element: <AllBooks />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
])

export default router
