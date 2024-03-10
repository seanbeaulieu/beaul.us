/** index file for server 
 * routing server to blog, projects, what else...
 */

require('dotenv').config()

// express declaration
const express = require('express')
const app = express()
app.use(express.static('dist'))
app.use(express.json())

// declare morgan here
const morgan = require('morgan')
app.use(morgan('tiny'))

// cors
const cors = require('cors')
app.use(cors())

// bring in routes, project and blog routes 
const projectRoutes = require('./routes/projectRoutes')
const blogPostRoutes = require('./routes/blogpostRoutes')

app.use('/projects', projectRoutes)
app.use('/blogposts', blogPostRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
