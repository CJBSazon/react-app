import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="lg" className="fixed w-full top-0 bg-orange-400">
      <Container className="flex justify-between items-center">
      <Navbar.Brand href="#home" className="lg:hidden md:flex justify-center justify-center">
            <img className="w-16 rounded-full " src="/src/assets/img/logo.jpg" alt="Mabsi Soy" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-full flex justify-between items-center">
          <Nav className="flex space-x-6">
            <Nav.Link href="#home" className="text-white text-base ">Home</Nav.Link>
            <Nav.Link href="#services" className="text-white text-base ">Services</Nav.Link>
            <Nav.Link href="#about" className="text-white text-base ">About</Nav.Link>
            <Nav.Link href="#menu" className="text-white text-base ">Menu</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home" className="lg:flex justify-center justify-center md:hidden">
            <img className="w-16 rounded-full " src="/src/assets/img/logo.jpg" alt="Mabsi Soy" />
          </Navbar.Brand>
          <Nav className="flex space-x-4">
            <Button variant="light" href="#sign-in" className="text-black">Sign In</Button>
            <Button variant="dark" href="#sign-up">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;