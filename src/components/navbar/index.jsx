import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const LinksToRender = [
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

const NavbarView = () => {
    return (
        <div className="Navbar">
            {LinksToRender.map(item => (
                <Link 
                    to={item.path} 
                    className="Navbar__link" 
                    key={item.name}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    )
}

export default NavbarView; 