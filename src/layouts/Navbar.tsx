import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 max-w-[1300px] mx-auto">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Book Store Catalog
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">All Books</Link>
                    </li>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
