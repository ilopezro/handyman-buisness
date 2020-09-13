import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const LinksToRender = [
    {
        path: '/', 
        name: 'Lopez Handyman'
    }, 
    {
        path: '/services', 
        name: 'Services'
    }, 
    {
        path: '/howitworks', 
        name: 'How It Works'
    },
    {
        path: '/about', 
        name: 'About'
    }, 
    {
        path: '/contact',
        name: 'Contact'
    }
]

const Links = () => {
    return (
        <>
            {LinksToRender.map(item => (
                <Link 
                    to={item.path} 
                    className="navbar__link" 
                    key={item.name}
                >
                    {item.name}
                </Link>
            ))}
        </>
    )
}

const NavbarView = () => {
    return(
        <div className="navbar">
            <Links />
        </div>
    )
}

export default NavbarView; 