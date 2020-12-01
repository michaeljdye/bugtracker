import { useState, useEffect } from 'react'
import Issues from '../components/Issues'
import IssueForm from '../components/IssueForm'

const Home = () => {
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

  return (
    <div>
      <h1>Bugtracker</h1>
      <IssueForm />
      <Issues issues={issues} />
    </div>
  )
}

export default Home
