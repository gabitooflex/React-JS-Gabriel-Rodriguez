import React from 'react'
import Counter from '../Items/Counter';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({ item, onAdd }) => {

    return (
        <div>
            <div className="centrar">
                <Card style={{ marginBottom:"40px"  ,width: '24rem' }}className=' mx-2 mt-4 ' >
                <Card.Img variant="top" src={item.link}  style={{ height: '30%' }} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                    Description: {item.description}
                    </Card.Text>
                    <Card.Text>
                    Precio: {item.price} 
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
            <div className="centrar">
                <Counter onAdd={onAdd}/>
            </div>

        </div>
        
        
    )
}

export default ItemDetail