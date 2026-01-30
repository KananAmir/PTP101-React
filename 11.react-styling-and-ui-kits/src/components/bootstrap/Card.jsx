import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRs27hLv_0kLt65iWAoo3rhfaRLjr3Pu3jHQ8ndOE5zVof2jhTIJ_MuEsW1dCT9Lp_VEt4hIUL0dXlvAhRC2g3fB2Bypp-44RZ9FC6Ek4&s=10" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardExample;