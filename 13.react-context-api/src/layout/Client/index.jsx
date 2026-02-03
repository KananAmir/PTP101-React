import Header from '../Client/Header'
import Footer from '../Client/Footer'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default ClientLayout