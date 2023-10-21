import React from "react";
import ItemListContainer from "../components/Items/ItemListContainer";
// import ItemDetailContainer from "../components/Details/ItemDetailContainer";
import Advertisings from "../components/Items/Advertisings"


const Store = () => {
  return (
    <div>
      <Advertisings/>
        <ItemListContainer/>
      {/* <ItemDetailContainer/> */}
    </div>
  );
};

export default Store;
