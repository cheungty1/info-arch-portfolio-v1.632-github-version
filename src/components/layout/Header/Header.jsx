import Link from 'next/link';
//import styles from './Header.module.scss';
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href='/'>iWorld
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href='/tech-news'><span>Tech</span></Nav.Link>
            <Nav.Link as={Link} href='/econ-news'><span>Econ</span></Nav.Link>
            <Nav.Link as={Link} href='/politics-news'><span>Politics</span></Nav.Link>
            <Nav.Link as={Link} href='/about'><span>About</span></Nav.Link>
            <Nav.Link as={Link} href='/privacy-policy'><span>Privacy</span></Nav.Link>
            <Nav.Link as={Link} href='/contact'><span>Contact</span></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
       );
      }
      
      export default Header;