import React from 'react'

const BlogpostTileContainer = ({ children }) => {
    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: '70px',
        maxWidth: '800px',
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
