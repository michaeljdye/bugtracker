import React from 'react'
import Issue from './Issue'

type issuesProps = {
  issues: {
    _id: number; 
    name: string; 
    description: string;
  }[]
}

const Issues: React.FC<issuesProps> = ({ issues }) => (
  <div>
    <h2>All issues</h2>
    <ul>
      {issues.length &&
        issues.map(({ _id, ...rest }) => <Issue key={_id} {...rest} />)}
    </ul>
  </div>
)

export default Issues
