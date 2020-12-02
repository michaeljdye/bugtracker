import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import AddIssue from './pages/AddIssue'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/add-issue'>
        <AddIssue />
      </Route>
    </Switch>
  </Router>
)

export default App
