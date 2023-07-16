import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { ToastContainer } from "react-toastify"

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <div className=" max-w-[1250px] flex justify-center items-center mx-auto">
                <Outlet />
            </div>
        </div>
    )
}
