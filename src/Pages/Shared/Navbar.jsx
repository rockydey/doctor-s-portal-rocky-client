import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        alert(error?.message);
    }
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/appointment'>Appointment</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        <li>{user ? <button onClick={logout} className='btn btn-ghost'>Sign Out</button> : <Link to='/login'>Login</Link>}</li>
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">Doctor's Portal</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/appointment'>Appointment</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li>{user ? <button onClick={logout} className='btn btn-ghost'>Sign Out</button> : <Link to='/login'>Login</Link>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;