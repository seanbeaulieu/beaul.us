import React, { useState, useEffect } from 'react'
import BlogpostService from '../services/blogposts'
import SingleBlogpost from './SingleBlogpost'
import BlogpostTile from './BlogpostTile'
import BlogpostTileContainer from './BlogpostTileContainer'

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
        <BlogpostTileContainer>
            {blogposts.map(blogpost => (
                <BlogpostTile key={blogpost.id} blogpost={blogpost} />
            ))}
        </BlogpostTileContainer>
    )
}

/* OLD
const Blogposts = () => {

    // declare state
    // fetch all blogposts
    const [blogposts, setBlogposts] = useState([])

    useEffect(() => {
        BlogpostService.getAllBlogposts()
            .then(response => {
                setBlogposts(response)
            })
            .catch(error => console.error(error))
    }, [])

    // map all blogposts out in a div
    return (
        <div>
            {blogposts.map(blogpost => (
                <BlogpostTile key={blogpost.id} blogpost={blogpost} />
            ))}
        </div>
    )

}
*/

export default Blogposts


