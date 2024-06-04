import { useState } from "react";
import { RiAlignJustify, RiCloseLargeFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div className="drawer z-10">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 md:w-96 min-h-full bg-base-200 text-base-content pt-12">
                        {/* Sidebar content here */}
                        <NavLink to={'/dashboard/userprofile'}><li className="md:text-2xl p-4">My Profile</li></NavLink>
                        <NavLink to={'/dashboard/userbookings'}><li className="md:text-2xl p-4">My Bookings</li></NavLink>
                        <NavLink to={'/dashboard/userwishlist'}><li className="md:text-2xl p-4">My Wishlist</li></NavLink>
                        <NavLink to={'/dashboard/requestadmin'}><li className="md:text-2xl p-4">Request to Admin</li></NavLink>
                        <div className="divider divider-info"></div>
                        <NavLink to={'/'}><li className="md:text-2xl p-4">Home</li></NavLink>
                    </ul>
                </div>
                <div className={`${open ? 'ml-52 md:ml-96 drawer-content sticky delay-150' : 'delay-200'}`}>
                    {/* Page content here */}
                    <label onClick={() => handleDrawer()} htmlFor="my-drawer" className="btn btn-circle btn-outline drawer-button">
                        {
                            open ?
                                <RiCloseLargeFill></RiCloseLargeFill>
                                :
                                <RiAlignJustify></RiAlignJustify>
                        }
                    </label>
                </div>
            </div>
            <div className="container mx-auto z-0">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;