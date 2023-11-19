
import './App.css';
import Sidebar from './Components/Sidebar';
import SpotyNavbar from './Components/Navbar';
import { Col, Container, Row } from 'react-bootstrap';
import Playlist from './Playlist';
import Player from './Components/Player';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      
     <Row className="d-flex flex-col align-items-md-start"  >
      <Col className='col-md-3 '>
      <Sidebar/>
      </Col>

      <Col className='col-md-8 mx-auto' style={{backgroundColor:'lightlue'}}> 
      <SpotyNavbar/>
      
     
      <h2 className='mt-5' style={{textAlign:'start'}}>Rock Classics</h2>
      <Playlist/>
      <br/>

      <h2 className='mt-5'  style={{textAlign:'start'}}>Pop Culture</h2>
      <Playlist/>
      <br/>

      <h2 className='mt-5'  style={{textAlign:'start'}}>#Hip Hop</h2>
      <Playlist/>
  
      </Col>
      </Row>
     
     
    
    </div>
  );
}

export default App;
