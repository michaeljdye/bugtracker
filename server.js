const express = require('express')
const cors = require('cors')
const app = express()

// create application/json parser
app.use(express.json())
app.use(cors())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bugtracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const issueSchema = new mongoose.Schema({
  name: String,
  description: String,
})

const Issue = mongoose.model('Issue', issueSchema)

app.get('/issues', async (req, res) => {
  try {
    const issues = await Issue.find()
    console.log(issues)
    res.json(issues)
  } catch (error) {
    console.log(error)
  }
})

app.post('/create-issue', (req, res) => {
  const { name, description } = req.body
  const issue = new Issue({ name, description })
  issue.save(error => {
    if (error) return console.log(error)
  })
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('DB connected 🔥')
})

const port = 4000
app.listen(port, console.log(`Listening on port ${port} 🚀`))
