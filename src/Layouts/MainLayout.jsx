import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-20 min-h-[calc(100vh-365px)] container mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;