import React, {  useContext, useState } from 'react'
import CartContext from '../Context/CartContext'
import Button from 'react-bootstrap/Button';
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Link } from 'react-router-dom';

const CartDetail = () =>{
    const [orderId, setOrderId] = useState("")
    const { cart, removeItem, clear} = useContext(CartContext)
    const addToCart = () => {
        const purchase ={
            buyer: {
                id: 1,
                name: "Gabriel Rodriguez",
                mail: "gabo.rodriguez.169@gamil.com"
            },
            items: cart,
            date: new Date()
        };
        const db = getFirestore();
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, purchase)
        .then(res => setOrderId(res.id))
        .catch(err => console.log(err))

        clear()

    }
    return(
        <>
            {
            cart.map( el => (
                <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-evenly", marginLeft:"50px", marginTop:"40px"}}>
                    <p >{el.item.name}</p>
                    <div >
                      <img variant="top" src={el.item.link}  style={{ height: '120px', borderRadius:"20px" }} />
                    </div>
                    <p > Unidades: {el.q}</p>
                    <p  >Precio: {el.item.price*el.q} USD</p>
                    <div style={{marginBottom:"20px"}} >
                        <Button  variant="dark" onClick={() => removeItem(el.item.id)}>Eliminar Objeto</Button>
                    </div>
                </div>
            )) 
            } 
            {   
                    orderId && <span style={{marginTop:"100px" , fontWeight:500}} className='centrar'>Gracias por su compra, esta es la id de su orden: {orderId} </span>
            }
            {
                cart.length > 0 &&
                <div className="centrar" style={{marginTop:"70px", marginBottom:"40px"}}>
                    <Button  variant="dark "onClick={addToCart} >Crear orden</Button>
                </div>
            }
            {
                cart.length === 0 && (
                    <>
                    <h4 style={{ marginTop: "100px" }} className='centrar'> Su carrito está vacío </h4>
                    <div className="centrar">
                        <button style={{ marginTop: "30px" }} className='btn btn-dark'><Link class="nav-link" to="/store">Volver a la tienda</Link></button>
                    </div>
                    </>
                )
            }
           
              
        </>
    )

}

export default CartDetail

