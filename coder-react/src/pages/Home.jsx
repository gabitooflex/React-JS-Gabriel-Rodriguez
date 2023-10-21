import React from "react"
import HomeTitle from "../components/Items/HomeTitle";
import CarouselHome from "../components/Items/CarouselHome";

const Home = () => {
    return(
        <div>
            <CarouselHome/>
            <div style={{display: "flex",alignItems: "Center",justifyContent: "center",marginTop:"25px"}}><HomeTitle greeting="Bienvenido a FEX" /></div>
            <div style={{display: "flex",alignItems: "Center",justifyContent: "center",fontSize:"40px",marginTop:"5px", fontWeight:"120px", marginBottom:"50px" }}><HomeTitle greeting="LA MEJOR ROPA UNDERGROUND" /></div>
        </div>
    )
}

export default Home