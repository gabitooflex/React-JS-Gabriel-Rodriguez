import React from "react"
import { useParams } from "react-router-dom"
import ItemDetailContainer from "../components/Details/ItemDetailContainer"
import Advertisings from "../components/Items/Advertisings"

const Details = () => {
    const {id} = useParams()
    console.log("paramsId", id);
    return(
        <div>
            <Advertisings/>
            <ItemDetailContainer id={id}/>
        </div>
    )
}

export default Details