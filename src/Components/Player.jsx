import { Container, Row, Col} from "react-bootstrap";

import next from "../assets/assets/playerbuttons/next.png";
import play from "../assets/assets/playerbuttons/play.png";
import prev from "../assets/assets/playerbuttons/prev.png";
import repeat from "../assets/assets/playerbuttons/repeat.png";
import shuffle from "../assets/assets/playerbuttons/shuffle.png";

function Player() {
  return (
    <Container className="fluid fixed-bottom pt-1" style={{backgroundColor:'darkgrey'}}>
      <Row>
        <Col >
          <Row className=" flex-column justify-content-center align-items-center">
            <Col className=" playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div class="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Player;