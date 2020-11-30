import { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [issues, setIssues] = useState([])

  const getIssues = async () => {
    const url = 'http://localhost:4000/issues'

    try {
      const data = await fetch(url).then(response => response.json())

      console.log(data)

      setIssues(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(getIssues, [])

  const handleSubmit = async e => {
    e.preventDefault()

    const url = 'http://localhost:4000/create-issue'
    const data = { name, description }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  return (
    <div>
      <h1>Bugtracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>
            Name:{' '}
            <input
              id='name'
              type='text'
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor='description'>
            Description:{' '}
            <input
              id='description'
              type='text'
              onChange={e => setDescription(e.target.value)}
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
      <div>
        <h2>All issues</h2>
        <ul>
          {issues.length &&
            issues.map(({ name, description }) => (
              <li>
                <h3>{name}</h3>
                <p>{description}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default App
