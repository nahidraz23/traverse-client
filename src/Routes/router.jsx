import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllPackages from "../Pages/AllPackages/AllPackages";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import TourGuidesProfile from "../Pages/TourGuidesProfile/TourGuidesProfile";

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
    }
])