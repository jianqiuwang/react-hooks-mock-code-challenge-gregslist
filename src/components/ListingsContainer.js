import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({cards, handleDeleteCard}) {
  
  const cardsArray=cards.map((card)=><ListingCard key={card.id} card={card} onDeleteCard={handleDeleteCard}/>)





  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {cardsArray}
      </ul>
    </main>
  );
}

export default ListingsContainer;
