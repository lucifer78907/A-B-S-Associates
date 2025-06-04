import Footer from "../components/UI/Footer"
import Header from "../components/UI/Header"
import { Outlet, ScrollRestoration } from "react-router-dom"

function RootLayout() {
    return (
        <>
            <ScrollRestoration />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout