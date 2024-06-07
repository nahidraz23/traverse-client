import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllPackages from "../Pages/AllPackages/AllPackages";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import TourGuidesProfile from "../Pages/TourGuidesProfile/TourGuidesProfile";
import DashboardLayout from "../Layouts/DashboardLayout";
import UserProfile from "../Pages/Dashboard/RegularDashboard/UserProfile/UserProfile";
import MyWishList from "../Pages/Dashboard/RegularDashboard/MyWishList/MyWishList";
import MyBookings from "../Pages/Dashboard/RegularDashboard/MyBookings/MyBookings";
import AdminProfile from "../Pages/Dashboard/AdminDashboard/AdminProfile/AdminProfile";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import RequestAdmin from "../Pages/Dashboard/RegularDashboard/RequestAdmin/RequestAdmin";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allpackages',
                element: <AllPackages></AllPackages>
            },
            {
                path: '/packageDetails/:id',
                element: <PackageDetails></PackageDetails>,
                loader: ({params}) => fetch(`http://localhost:5300/packageDetails/${params.id}`)
            },
            {
                path: '/guideDetails/:id',
                element: <TourGuidesProfile></TourGuidesProfile>,
                loader: ({params}) => fetch(`http://localhost:5300/guides/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            // admin dashboard
            {
                path: '/dashboard/adminprofile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: '/dashboard/manageusers',
                element: <ManageUsers></ManageUsers>
            },

            // normal user dashboard
            {
                path: '/dashboard/userprofile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/dashboard/userwishlist',
                element: <MyWishList></MyWishList>
            },
            {
                path: '/dashboard/userbookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/requestadmin',
                element: <RequestAdmin></RequestAdmin>
            }
        ]
    }
])