import Footer from "../components/UI/Footer"
import Header from "../components/UI/Header"
import { Outlet } from "react-router-dom"

function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout