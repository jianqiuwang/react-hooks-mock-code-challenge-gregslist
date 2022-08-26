import React,{useState} from "react";

function ListingCard({card, onDeleteCard}) {
  const [like, setLike]=useState(false)
  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${card.id}`,{
      method: "DELETE",
    })
    .then(resp=>resp.json())
    .then(()=>onDeleteCard(card))
  }

    // const classOfName= like ? "emoji-button favorite active" : "emoji-button favorite"
    // const liked = like ? "★" : "☆"

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={card.description} />
      </div>
      <div className="details">
        {/* <button className={classOfName} onClick={()=>setLike(like=>!like)}>{liked}</button> */}
        {like? (
          <button className="emoji-button favorite active" onClick={()=>setLike(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>setLike(true)}>☆</button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
