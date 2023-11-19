import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function SpotyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mx-auto">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex flex-row justify-content-center">
            <Nav.Link href="#home" >TRENDING</Nav.Link>
            <Nav.Link href="#link" className='ms-5'>PODCAST</Nav.Link>
            <Nav.Link href="#home" className='ms-5'>MOODS AND GENRES</Nav.Link>
            <Nav.Link href="#link" className='ms-5'>NEW RELEASES</Nav.Link>
            <Nav.Link href="#home" className='ms-5'>DISCOVER</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SpotyNavbar;