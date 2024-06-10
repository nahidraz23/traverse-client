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
import GuideProfile from "../Pages/Dashboard/GuideDashboard/GuideProfile/GuideProfile";
import AssignedTour from "../Pages/Dashboard/GuideDashboard/AssignedTour/AssignedTour";
import PrivateRoute from "./PrivateRoute";
import AddPackage from "../Pages/Dashboard/AdminDashboard/AddPackage/AddPackage";
import TourTypeCard from "../Pages/Home/TourTypeSection/TourTypeCard/TourTypeCard";
import StoryDetails from "../Pages/Home/TouristStorySection/StoryDetails";

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
                element: <PrivateRoute><PackageDetails></PackageDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5300/packageDetails/${params.id}`)
            },
            {
                path: '/guideDetails/:id',
                element: <PrivateRoute><TourGuidesProfile></TourGuidesProfile></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5300/guides/${params.id}`)
            },
            {
                path: '/tourtype/:type',
                element: <TourTypeCard></TourTypeCard>,
                loader: ({params}) => fetch(`http://localhost:5300/packages/${params.type}`)
            },
            {
                path: '/storydetails/:id',
                element: <StoryDetails></StoryDetails>,
                loader: ({params}) => fetch(`http://localhost:5300/stories/${params.id}`)
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
            {
                path: '/dashboard/addpackage',
                element: <AddPackage></AddPackage>
            },

            // guide dashboard
            {
                path: "/dashboard/guideprofile",
                element: <PrivateRoute><GuideProfile></GuideProfile></PrivateRoute>
            },
            {
                path: '/dashboard/assignedtour',
                element: <PrivateRoute><AssignedTour></AssignedTour></PrivateRoute>
            },

            // normal user dashboard
            {
                path: '/dashboard/userprofile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: '/dashboard/userwishlist',
                element: <PrivateRoute><MyWishList></MyWishList></PrivateRoute>
            },
            {
                path: '/dashboard/userbookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/dashboard/requestadmin',
                element: <PrivateRoute><RequestAdmin></RequestAdmin></PrivateRoute>
            }
        ]
    }
])