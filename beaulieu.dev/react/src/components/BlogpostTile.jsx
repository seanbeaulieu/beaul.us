import React from 'react'
import { Link } from 'react-router-dom'

const BlogpostTile = ({ blogpost }) => {
    const styles = {
        container: {
            padding: '16px',
            border: '1px solid #E2E8F0',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            textDecoration: 'none',
            color: 'inherit',
            marginBottom: '20px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            // inline style does not work
            '&:hover': {
                backgroundColor: '#f8f8f8'
            }
        },
        title: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#2D3748',
            margin: '0',
        },
        subtitle: {
            fontSize: '16px',
            color: '#4A5568',
            margin: '0',
        },
        authorAndDate: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '14px',
            color: '#718096',
            marginTop: 'auto',
        }
    }

    return (
        <Link to={`blogposts/${blogpost.id}`} style={styles.container}>
            <h2 style={styles.title}>{blogpost.title}</h2>
            <h3 style={styles.subtitle}>{blogpost.subtitle}</h3>
            <div style={styles.authorAndDate}>
                <span>By {blogpost.author}</span>
                <span>{blogpost.date}</span>
            </div>
        </Link>
    )
}

export default BlogpostTile
