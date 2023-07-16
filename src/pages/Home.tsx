import Hero from "../components/home/Hero"
import Navbar from "../layouts/Navbar"
import GetRecentBooks from "../components/home/GetRecentBooks"

export default function Home() {
    return (
        <div>
            <Hero />
            <GetRecentBooks />
        </div>
    )
}
