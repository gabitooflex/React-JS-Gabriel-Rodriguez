import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
    return (
        <Card style={{ marginBottom:"40px"  ,width: '18rem' }}className=' mx-2 mt-4 ' >
            <Card.Img variant="top" src={item.link}  style={{ height: '30%' }} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                   Description: {item.description}
                </Card.Text>
                <Card.Text>
                   Precio: {item.price} USD
                </Card.Text>
                <Link to={`/details/${item.id}`}>
                    <Button variant="dark">Ver detalles</Button>
                </Link>
            </Card.Body>
        </Card>
        
    );
}

export default CardItem