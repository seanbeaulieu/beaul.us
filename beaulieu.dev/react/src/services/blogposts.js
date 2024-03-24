import axios from 'axios'
const baseUrl = '/blogposts'

const getAllBlogposts = () => {
    // console.log(baseUrl)
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getBlogpostById = id => {
    // console.log(baseUrl)
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const addBlogpost = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deleteBlogpost = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAllBlogposts, getBlogpostById, addBlogpost, deleteBlogpost }