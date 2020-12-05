import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const IssueForm: React.FC = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const url = 'http://localhost:4000/create-issue'
    const data: { name: string; description: string; } = { name, description }

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor='name'>
          Name:{' '}
          <Form.Control
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='description'>
          Description:{' '}
          <Form.Control
            id='description'
            type='text'
            onChange={e => setDescription(e.target.value)}
          />
        </Form.Label>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default IssueForm
