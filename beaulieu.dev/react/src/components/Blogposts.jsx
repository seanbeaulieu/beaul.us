import React, { useState, useEffect } from 'react';
import BlogpostService from '../services/blogposts';


const Blogposts = () => {

    /**
     * SingleBlogpost
     * Displays a single blogpost with a title, subtitle, author, content, and date
     * project: json object containing the blogpost
     */
    const SingleBlogpost = ({ blogpost }) => {
        const blogpostStyle = {
            container: "p-4 border border-gray-200 rounded-lg shadow-md",
            title: "text-xl font-bold",
            subtitle: "text-md text-gray-600",
            author: "text-sm text-gray-500",
            content: "my-2",
            date: "text-xs text-gray-400",
        }
    
        // basic formatting for a single blogpost
        return (
            <div className={blogpostStyle.container}>
                <h2 className={blogpostStyle.title}>{blogpost.title}</h2>
                <h3 className={blogpostStyle.subtitle}>{blogpost.subtitle}</h3>
                <p className={blogpostStyle.author}>By {blogpost.author}</p>
                <div className={blogpostStyle.content}>{blogpost.content}</div>
                <p className={blogpostStyle.date}>{blostpost.date}</p>
            </div>
        )
    }

    // fetch all blogposts
    const blogposts = BlogpostService.getAllBlogposts()
    // console.log('here')

    // map all blogposts out in a div
    return (
        <div>
            {blogposts.map(blogpost => (
                <SingleBlogpost key={blogpost.id} blogpost={blogpost} />
            ))}
        </div>
    )

}

export default Blogposts


