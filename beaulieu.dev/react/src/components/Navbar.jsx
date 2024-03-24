import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navbarStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '1rem',
        position: 'fixed',  
        top: 0,             
        left: 0,            
        right: 0,
        width: '100%',      
        backgroundColor: '#fff', 
        borderBottom: '1px solid #ddd',
        zIndex: 1000        
    }

    const linkStyle = {
        marginRight: '1rem',
        textDecoration: 'none',
        color: 'black',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        fontFamily: 'DM Sans, sans-serif',
        padding: '5px',
        border: '1px solid transparent',
        borderRadius: '4px',
        transition: 'background-color 0.3s'
    }

    // use state in order to track when the mouse is over the link
    const [hoverIndex, setHoverIndex] = useState(null);

    const getLinkStyle = index => ({
        ...linkStyle,
        backgroundColor: index === hoverIndex ? 'rgba(0, 0, 0, 0.1)' : 'transparent'
    })

    return (
        <nav style={navbarStyle}>
            <div>
                <Link
                    to="/"
                    style={getLinkStyle(0)}
                    onMouseEnter={() => setHoverIndex(0)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    Home
                </Link>
                <Link
                    to="/blogposts"
                    style={getLinkStyle(1)}
                    onMouseEnter={() => setHoverIndex(1)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    Blog
                </Link>
                <Link
                    to="/contact"
                    style={getLinkStyle(2)}
                    onMouseEnter={() => setHoverIndex(2)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    Contact
                </Link>
            </div>
            <a
                href="https://github.com/seanbeaulieu" 
                target="_blank"
                rel="noopener noreferrer"
                style={getLinkStyle(3)}
                onMouseEnter={() => setHoverIndex(3)}
                onMouseLeave={() => setHoverIndex(null)}
            >
                GitHub
            </a>
        </nav>
    )
}

export default Navbar;

