import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={'h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center'}>
            <span className={'font-bold'}>My-APP</span>
            <span>
                <Link to={'/'} className={'mr-2'}>Products</Link>
                <Link to={'/about'} className={'mr-2'}>About</Link>
                <Link to={'/contacts'} className={'mr-2'}>Contacts</Link>
                <Link to={'/support'} className={'mr-2'}>Support</Link>
                <Link to={'/login'} className={'mr-2'}>Login</Link>
            </span>

        </nav>
    );
};

export default Navigation;
