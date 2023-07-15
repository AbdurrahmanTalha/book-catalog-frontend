import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import MainLayout from "../layouts/MainLayout"
import AllBooks from "../pages/AllBooks"

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
        ],
    },
])

export default router
