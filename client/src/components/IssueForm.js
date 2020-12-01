import { useState } from 'react'
import Button from 'react-bootstrap/Button'

const IssueForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

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
      <Button>Submit</Button>
    </form>
  )
}

export default IssueForm
