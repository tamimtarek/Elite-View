import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/updateprofile">Update Profile</NavLink></li>
         <li><NavLink to="/profile">Profile</NavLink></li>
    </>

    const handleLogout = e => {
        e.preventDefault();
        return logOut();
    }

    return (
        <div className="navbar bg-slate-600 bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl lg:text-3xl font-black">Elite View</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <div className="w-10">
                    {
                        user && <Link to="/profile"><img alt="" title={user.displayName} className="rounded-full" src={user.photoURL} /></Link>
                    }
                </div>
                {
                    user ? <Link to="/login"><button onClick={handleLogout} className="btn">Log Out</button></Link> : <Link to="/login" ><button className="btn">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;