import React, { useState, useEffect } from 'react'
import BlogpostService from '../services/blogposts'
import SingleBlogpost from './SingleBlogpost'
import BlogpostTile from './BlogpostTile'
import BlogpostTileContainer from './BlogpostTileContainer'
import BlogpostCategories from './BlogpostCategories'

const Blogposts = () => {
    const [blogposts, setBlogposts] = useState([])

    useEffect(() => {
        BlogpostService.getAllBlogposts()
            .then(response => {
                setBlogposts(response);
            })
            .catch(error => console.error(error));
    }, [])

    return (
        <div>
            <BlogpostCategories blogposts={blogposts} />
        </div>
    )
}

export default Blogposts


