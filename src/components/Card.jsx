import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function BasicExample() {
  return (
    <div style={{margin:40,justifyContent:"center"}}>
     <h1 style={{ textAlign: "center"}}>Check out these EPIC Destinations!</h1>
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 2 }).map((index, idx) => (
      <Col key={index}>
        <Card>
          <Card.Img variant="top" style={{width:"100%",height:200,overflow:"hidden",position:"relative"}} src={require('../images/img-2.jpg')} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  <br></br>
  <Row xs={1}  md={4} className="g-4">
    {Array.from({ length: 12 }).map((index, idx) => (
      <Col key={index}>
        <Card>
          <Card.Img variant="top" style={{width:"100%",height:200,overflow:"hidden",position:"relative"}} src={require('../images/img-2.jpg')} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  </div>
  
  );
}

export default BasicExample;