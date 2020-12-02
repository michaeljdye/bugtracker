import { useState, useEffect } from 'react'
import Issues from '../components/Issues'
import IssueForm from '../components/IssueForm'
import Layout from '../components/Layout'

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
    <Layout>
      <Issues issues={issues} />
    </Layout>
  )
}

export default Home
