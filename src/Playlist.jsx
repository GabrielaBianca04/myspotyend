import { Col, Row, Card } from "react-bootstrap";


function Playlist(){
    /*const albumCard = function (trackInfo) {
        return `
            <div class="col text-center" id=${trackInfo.id}>
                <img class="img-fluid" src=${
                  trackInfo.album.cover_medium
                } alt="track" />
              <p>
                  Track: "${
                    trackInfo.title.length < 16
                      ? `${trackInfo.title}`
                      : `${trackInfo.title.substring(0, 16)}...`
                  }"<br>
                  Artist: ${trackInfo.artist.name}
              </p>
            </div>`
      }*/

const Track = () => {
 fetch (`https://striveschool-api.herokuapp.com/api/deezer/search?q=query`)
.then((res) => res.json())
.then((data) => {console.log(data);
});}
       
      
    return(
      <div>
            <Row className="d-flex flex-row justify-content-md-center">
                <Col className="col col-md-3">   
                <Card >
                    <Card.Img variant="top" src={Track.picture} />
                    <Card.Body>
                        <Card.Text>Track:"{Track.name}"</Card.Text>
                        <Card.Text>Artist:"{Track.artist}"</Card.Text>
                         </Card.Body>
                          </Card>
                          </Col>
                          <Col className="col col-md-3">   
                <Card >
                    <Card.Img variant="top" src={Track.picture} />
                    <Card.Body>
                        <Card.Text>Track:"{Track.name}"</Card.Text>
                        <Card.Text>Artist:"{Track.artist}"</Card.Text>
                         </Card.Body>
                          </Card>
                          </Col>
                          <Col className="col col-md-3">   
                <Card >
                    <Card.Img variant="top" src={Track.picture} />
                    <Card.Body>
                        <Card.Text>Track:"{Track.name}"</Card.Text>
                        <Card.Text>Artist:"{Track.artist}"</Card.Text>
                         </Card.Body>
                          </Card>
                          </Col>
                          <Col className="col col-md-3">   
                <Card >
                    <Card.Img variant="top" src={Track.picture} />
                    <Card.Body>
                        <Card.Text>Track:"{Track.name}"</Card.Text>
                        <Card.Text>Artist:"{Track.artist}"</Card.Text>
                         </Card.Body>
                          </Card>
                          </Col>
                
            </Row>
        </div> 
        
        /*<div>
            <Row className="d-flex flex-row justify-content-md-center">
                <Col className="col col-md-3"> {albumCard} </Col>
                <Col className="col col-md-3"> {albumCard} </Col>
                <Col className="col col-md-3"> {albumCard} </Col>
                <Col className="col col-md-3">{albumCard} </Col> 
            </Row>
        </div>
        */
    )
}

export default Playlist