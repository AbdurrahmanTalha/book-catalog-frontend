import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./routes/routes"
import store from "./redux/store"
import { Provider } from "react-redux"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import React from "react"
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
        <ToastContainer />
    </React.StrictMode>
)
