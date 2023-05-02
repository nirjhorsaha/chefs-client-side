import React from 'react';
import bannerImage from '../../assets/aspiringchef.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 p-5 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li>
                                <Link to="/" className='default '>
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link to="/statistic" className='default'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/appliedjobs" className='default'>
                                     Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className='default'>
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className='normal-case text-5xl custom-text font-bold'>
                        <img src={bannerImage} alt="" srcset="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 tracking-wider font-medium">
                        <li>
                            <Link to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="custom-btn">Start Applying</a> */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://img.freepik.com/free-photo/handsome-cheerful-young-man-with-stylish-haircut-dimpled-smile-posing-isolated-against-blank-yellow-wall-dressed-cozy-maroon-sweater-having-confident-look_343059-4609.jpg?w=740&t=st=1683037467~exp=1683038067~hmac=89347860ebd726a4d5516670f11771d236bbc0d44d5f32ea1a889e8a1e883755" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Dashboard</a></li>
                        </ul>
                    </div> 
                    <button className="btn btn-warning btn-outline ms-4">Logout</button>
                </div>
            </div>

        </div>
    );
};

export default NavBar;

