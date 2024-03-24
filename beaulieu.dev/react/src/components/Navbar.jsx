import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const navbarStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '1rem',
        borderBottom: '1px solid #ddd'
    }

    const linkStyle = {
        marginRight: '1rem',
        textDecoration: 'none',
        color: 'black',
        fontSize: '1.2rem'
    }

    return (
        <nav style={navbarStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/blogposts" style={linkStyle}>Blog</Link>
        </nav>
    )
}

export default Navbar
