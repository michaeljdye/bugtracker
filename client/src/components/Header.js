import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Header = () => (
  <Navbar bg='dark' variant='dark'>
    <Navbar.Brand href='/'>Bugtracker</Navbar.Brand>
    <Nav>
      <Nav.Item>
        <Nav.Link as={Link} to='/add-issue'>
          Add Issue
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar>
)

export default Header
