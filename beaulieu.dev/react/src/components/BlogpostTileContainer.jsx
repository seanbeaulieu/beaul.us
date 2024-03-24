import React from 'react'

const BlogpostTileContainer = ({ children }) => {
    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        maxWidth: '800px', // Adjust the width as needed
        padding: '20px',
        boxSizing: 'border-box',
    }

    return (
        <div style={containerStyles}>
            {children}
        </div>
    )
}

export default BlogpostTileContainer
