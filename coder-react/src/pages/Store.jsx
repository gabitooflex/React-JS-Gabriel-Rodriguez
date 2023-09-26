import React from "react";
import ItemListContainer from "../components/Items/ItemListContainer";
import ItemDetailContainer from "../components/Details/ItemDetailContainer";
import { Router, Routes } from "react-router-dom";
import Details from "./details";


const Store = () => {
  return (
    <div>
     <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
};

export default Store;
