import axios from 'axios'
const baseUrl = '/api/projects'

const getAllProjects = () => {
    // console.log(baseUrl)
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addProject = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deleteProject = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAllProjects, addProject, deleteProject }