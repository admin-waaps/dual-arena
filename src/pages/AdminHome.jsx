import { Link, Outlet } from "react-router-dom"
import AdminDash from "../components/admin_dashboard/admin_dashboard"
import AdminHeader from "../components/admin_header/admin_header"
import AdminSideBar from "../components/admin_sidebar/admin_sidebar"
import AdminSidebar from "../components/admin_sidebar/admin_sidebar"



const AdminPanelHome = () => {

    return (
        <div>


            <div className="w-[100%] -z-10">
                <AdminHeader />

            </div>

            <div className="flex">
                <div className="relative top-[-90px] left-[0px] h-[1080px] z-10">
                    <AdminSideBar />

                </div>

                <div className="h-auto m-[30px]">
                    <Outlet />

                </div>

            </div>


        </div>

        // <div>
        //     <div className="">
        //         <AdminHeader />
        //     </div>
        //     <div>

        //         <Outlet />
        //     </div>

        //     {/* <Link to="/admin">
        // </Link> */}
        //     <div className="relative bottom-[88px]">
        //         <AdminSidebar />
        //     </div>
        // </div>

    )
}

export default AdminPanelHome