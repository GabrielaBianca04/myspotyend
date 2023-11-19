import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/assets/logo.png";
import { Nav,Row,Col,Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import SearchTrack from '../Search';

function Sidebar() {
    
  return (
    <div className='bg-dark' style={{color:'white'}}>
   
      <Navbar className='bg-dark' >
        <Container >
          <Navbar.Brand className='mx-auto' href="#home"><img src={logo} alt="logo" style={{width:'150px', height:'50px'}} /></Navbar.Brand>
        </Container>
      </Navbar>

      <br />

      <Navbar className='pt-5' >
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="#home" className='mx-auto'>Home</Nav.Link>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />

      <Navbar >
        <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="#link" className='mx-auto'>Your Library</Nav.Link>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />

      <Navbar className='pb-5'>
        <Container >
        <SearchTrack/>
        </Container>
      </Navbar>
      <br />
      <Navbar  className='py-5'>
        <Container>
         {''}
        </Container>
      </Navbar>
      <br/>
      <Navbar className='pt-5' >
        <Container>
          <Button variant='light' style={{borderRadius:'20px',width:'70%'}} className='mx-auto'>Sign Up</Button>
        </Container>
      </Navbar>
      <br/>

      <Navbar >
        <Container>
          <Button variant='outline-light' style={{borderRadius:'20px',width:'70%'}} className='mx-auto'>Login</Button>
        </Container>
      </Navbar> 

<br/>
      <Navbar className='pb-5'>
        <Container>
        <p className='mx-auto'>Cookie policy | Privacy</p>
        </Container>
      </Navbar>
    </div>
  );
}

export default Sidebar