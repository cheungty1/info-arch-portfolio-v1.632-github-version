import Link from 'next/link';
import styles from './Header.module.scss';
import { Container, Nav, Navbar } from "react-bootstrap";
// CODEFEED ICON: https://react-icons.github.io/react-icons/search?q=mdoutlinecodeoff
// import { MdOutlineCodeOff } from 'react-icons/md';


function Header() {
  return (
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href='/'>iWorld
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*<Nav.Link as={Link} href='/'><span>i</span>World</Nav.Link>*/}
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
      
/*
function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href='/'>
          <span className={styles.logoEnds}>&lt; </span> 
          <span className={styles.logoMain}>iWorld </span>
          <span className={styles.logoEnds}>&#47;&gt;</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'><span>i</span>World</Link>
          </li>
          <li>
            <Link href='/tech-news'><span>Tech</span></Link>
          </li>
          <li>
            <Link href='/econ-news'><span>Econ</span></Link>
          </li>
          <li>
            <Link href='/politics-news'><span>Politics</span></Link>
          </li>
          <li>
            <Link href='/about'><span>About</span></Link>
          </li>
          <li>
            <Link href='/privacy-policy'><span>Privacy</span></Link>
          </li>
          <li>
            <Link href='/contact'><span>Contact</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;*/