import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaEnvelope, FaPowerOff, FaUser } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

const Navbar = () => {
    const { user, signOutUser } = useAuth();

    const navLinks = (
        <div className="flex gap-9 text-white font-semibold text-xl">
            <NavLink><li>Home</li></NavLink>
            <NavLink><li>Community</li></NavLink>
            <NavLink><li>Blogs</li></NavLink>
            <NavLink><li>About Us</li></NavLink>
            <NavLink><li>Contact Us</li></NavLink>
        </div>
    )

    // Theme control
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const handleToggleTheme = e => {
        if (e.target.checked) {
            setTheme('sunset');
        }
        else {
            setTheme('light');
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme])

    // handle sign out
    const handleSignOut = () => {
        signOutUser()
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="navbar bg-base-100 fixed z-10 bg-opacity-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="text-3xl font-semibold text-white">Traverse</a>
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex mr-32">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                {
                    user ?
                        <>
                            <details className="dropdown dropdown-end">
                                <summary className="m-1 btn btn-ghost">
                                    <div className="avatar">
                                        <div className="w-12 mask mask-hexagon">
                                            {
                                                user?.photoURL ?
                                                    <img src={user?.photoURL} />
                                                    :
                                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                                            }
                                        </div>
                                    </div>
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><div className="flex gap-2 items-center ">
                                        <MdAdminPanelSettings></MdAdminPanelSettings>
                                        <Link>Dashboard</Link>
                                    </div></li>
                                    <li>
                                        <div className="flex gap-2 items-center">
                                            <FaUser className="text-green-500"></FaUser>
                                            <p>{user?.displayName}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex gap-2 items-center">
                                            <FaEnvelope className="text-blue-500"></FaEnvelope>
                                            <p>{user?.email}</p>
                                        </div>
                                    </li>
                                    <li><button onClick={handleSignOut} className="flex items-center gap-2">
                                        <FaPowerOff className="text-red-500"></FaPowerOff>
                                        <p>Log Out</p>
                                    </button></li>

                                </ul>
                            </details>
                        </>
                        :
                        <>
                            <Link to={'/login'} className="btn bg-primary-color text-black dark:hover:text-primary-color border-none">Login</Link>
                        </>
                }
                <div className="md:ml-4">
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleToggleTheme} type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;