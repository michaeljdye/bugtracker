import Issue from './Issue'

const Issues = ({ issues }) => (
  <div>
    <h2>All issues</h2>
    <ul>
      {issues.length &&
        issues.map(({ _id, ...rest }) => <Issue key={_id} {...rest} />)}
    </ul>
  </div>
)

export default Issues
