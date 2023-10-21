import React, { useState }  from 'react'
import Button from 'react-bootstrap/Button';

const Counter = ({ onAdd}) => {
    const[count, setCount] = useState(1)
    const increment = () => {
        if (count < 5) {
          setCount(count + 1);
        }
      };
    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
    return(
        <div style={{marginBottom:"80px"}}>
            <Button style={{marginRight:"20px"}} variant="dark" onClick={increment}>Agregar</Button>
            <Button style={{marginRight:"20px"}} variant="dark" onClick={decrement}>Restar</Button>
            <span style={{marginRight:"20px"}}>{ count }</span>
            <Button variant="dark" onClick={() => onAdd (count) }>Agregar al carrito</Button>
        </div>
    )
}

export default Counter
