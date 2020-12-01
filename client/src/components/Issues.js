import Issue from './Issue'

const Issues = ({ issues }) => (
  <div>
    <h2>All issues</h2>
    <ul>{issues.length && issues.map(issue => <Issue {...issue} />)}</ul>
  </div>
)

export default Issues
