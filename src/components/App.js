import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [cards, setCards]=useState([])
  const [search, onSearch]=useState("")
  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(resp=>resp.json())
    .then(cards=>setCards(cards))
  },[])

  function handleDeleteCard(deletedCard){
    const updatedCards=cards.filter((card)=>card.id !== deletedCard.id)
    setCards(updatedCards)
  }

  const cardDisplay=cards.filter((card)=>card.description.toLowerCase().includes(search.toLowerCase()))
  console.log(cards)
  console.log(cardDisplay)

  return (
    <div className="app">
      <Header onSearch={onSearch}/>
      <ListingsContainer cards={cardDisplay} handleDeleteCard={handleDeleteCard}/>
    </div>
  );
}

export default App;
