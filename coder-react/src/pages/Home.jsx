import React from "react"
import HomeTitle from "../components/HomeTitle";
import CarouselHome from "../components/CarouselHome";

const Home = () => {
    return(
        <div>
            <CarouselHome/>
            <div style={{display: "flex",alignItems: "Center",justifyContent: "center",marginTop:"25px"}}><HomeTitle greeting="Bienvenido a FEX" /></div>
            <div style={{display: "flex",alignItems: "Center",justifyContent: "center",fontSize:"40px",marginTop:"5px", fontWeight:"120px" }}><HomeTitle greeting="LA MEJOR ROPA UNDERGROUND" /></div>
        </div>
    )
}

export default Home