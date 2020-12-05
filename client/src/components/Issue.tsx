import React from 'react'

type issueProps = {
  name: string;
  description: string;
}

const Issue: React.FC<issueProps> = ({ name, description }) => (
  <li>
    <h3>{name}</h3>
    <p>{description}</p>
  </li>
)

export default Issue
