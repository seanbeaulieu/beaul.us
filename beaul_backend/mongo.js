const mongoose = require('mongoose')
const password = process.argv[2]
console.log(process.argv[2])

// define url below for db
// const url =
//    `mongodb+srv://seanlbeaulieu:${password}@beaul-dev.usxejsv.mongodb.net/blogposts?retryWrites=true&w=majority&appName=beaul-dev`


const url = process.env.MONGODB_URI

    // NO PASSWORD CASE
if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
  }
  
  mongoose.set('strictQuery', false)
  
  mongoose.connect(url)
  
 // defining the schema for a blogpost
const blogPostSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    author: String,
    content: String,
    date: String,
    category: String
    // what other fields to add...


})

const BlogPost = mongoose.model('Blogpost', blogPostSchema);

// defining the schema for a single project
const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    link: String,
    
});

const Project = mongoose.model('Project', projectSchema);

console.log('number of args', process.argv.length)

// adding a blogpost from server
if (process.argv[3] === 'blogpost') {
    const blogpost = new BlogPost({
        title: process.argv[4],
        subtitle: process.argv[5],
        author: process.argv[6],
        content: process.argv[7],
        date: process.argv[8],
    })

    blogpost.save()
      .then(result => {
      console.log('blogpost saved')
      mongoose.connection.close()
  })
      .catch(error => {
      console.error('error saving blogpost:', error)
      mongoose.connection.close()
  })
}

// adding a project from server
else if (process.argv[3] === 'project') {
    const project = new Project({
        name:  process.argv[4],
        description:  process.argv[5],
        link:  process.argv[6],
    })
    
    project.save()
      .then(result => {
      console.log('project saved')
      mongoose.connection.close()
    })
      .catch(error => {
      console.error('error saving project:', error)
      mongoose.connection.close()        
    })
}