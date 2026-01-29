import AdminHeader from '../Admin/Header'
import AdminFooter from '../Admin/Footer'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            <AdminHeader />
            <Outlet />
            <AdminFooter />
        </div>
    )
}

export default AdminLayout