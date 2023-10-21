import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore } from "firebase/firestore"
const ItemListContainer = () => {
    const [items, setItems] = useState([]);
 
    useEffect ( () => {
        const db = getFirestore();

        const itemCollection = collection(db, "items")

        getDocs(itemCollection)
        .then(snapshot => {
                   const allData = snapshot.docs.map(document => ({id: document.id, ...document.data()}) )
                   setItems(allData)
        })
    },[])

    return (
        <Container>
            <Row>
                {
                    items.length> 0 && 
                    <ItemList items={items} />
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer