import { Nav, Container, NavLink, NavDropdown, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to='/'>
          <Nav.Link className='text-light'>
            Template
          </Nav.Link>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/home'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/team'>
              <Nav.Link>Team</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
