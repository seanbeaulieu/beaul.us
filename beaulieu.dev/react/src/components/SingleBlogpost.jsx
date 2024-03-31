import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BlogpostService from '../services/blogposts'
import ReactMarkdown from 'react-markdown'

/**
     * SingleBlogpost
     * Displays a single blogpost with a title, subtitle, author, content, and date
     * project: json object containing the blogpost
     */
const SingleBlogpost = () => {
    const [blogpost, setBlogpost] = useState(null)
    const { id } = useParams() 

    useEffect(() => {
        
        BlogpostService.getBlogpostById(id)
            .then(data => {
                setBlogpost(data);
            })
            .catch(error => console.error(error));
    }, [id])

    if (!blogpost) {
        return <div>Loading...</div>
    }

    // Define the style, basic 
    const blogpostStyle = {
        container: {
            whiteSpace: 'pre-wrap',
            padding: '1rem',
            margin: 'auto',
            textAlign: 'left',
            maxWidth: '32rem'
        },
        title: {
            fontSize: '1.25rem',
            fontWeight: 'bold'
        },
        subtitle: {
            fontSize: '1rem',
            color: '#4A5568'
        },
        author: {
            fontSize: '0.875rem',
            color: '#718096'
        },
        content: {
            marginY: '0.5rem'
        },
        date: {
            fontSize: '0.75rem',
            color: '#718096'
        }
    }

    return (
        <div style={blogpostStyle.container}>
            <h2 style={blogpostStyle.title}>{blogpost.title}</h2>
            <h3 style={blogpostStyle.subtitle}>{blogpost.subtitle}</h3>
            <p style={blogpostStyle.author}>By {blogpost.author}</p>
            <div style={blogpostStyle.content}>{blogpost.content}</div>
            <p style={blogpostStyle.date}>{blogpost.date}</p>
        </div>
    )
}

export default SingleBlogpost