import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import IssueForm from './components/IssueForm'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  </Router>
)

export default App
