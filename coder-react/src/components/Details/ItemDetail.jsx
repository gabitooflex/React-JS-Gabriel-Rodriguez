import React, { useEffect } from 'react'


const ItemDetail = ({ item }) => {

    return (
        <div>
            <h5 className='centrar'>{item.title}</h5>
            <div className='centrar'>
                <img style={{ height:"500px",}} src={item.image} />
            </div>
            <p className='centrar'>
                description: {item.description}
            </p>
            <p className='centrar'>
                Price: {item.price}
            </p>
            <p className='centrar'>
                category:  {item.category}
            </p>
        </div>
    )
}

export default ItemDetail