
import { useState } from "react";
import { Row,Col,Form, Button,Container } from "react-bootstrap";




const SearchTrack = () => {


const [track,setTrack]= useState('');
const [trackInfo,setTrackInfo] = useState(null);

function buttonClick(){
    console.log("Bottone cliccato!")
    console.log(track)

    
    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=query`;
    fetch (url)
.then((res) => res.json())
.then((data) => {console.log(data);
});
       
};

return(
 <Container>
  <Row >
    <Col md="10" className="ms-5">
    <Form inline>
     <Form.Control
      className="ms-3"
      type="text"
      value={track}
      placeholder="Search"
      onChange={(e) => setTrack(e.target.value)}
    />
</Form>
<Button onClick={buttonClick} variant="outline-light" >Go</Button>
 </Col>
  </Row>
 </Container>
)
}

export default SearchTrack;