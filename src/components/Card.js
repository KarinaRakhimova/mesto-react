function Card(props) {

function handleCardClick() {
  props.onCardClick(props.card);
  console.log(props.card)
}

  return(
    <li className="element" >
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={()=>handleCardClick(props.card)} />
      <div className="element__description">
        <h2 className="element__heading">{props.card.name}</h2>
        <div className="element__like">
          <button className="element__like-button" aria-label="лайк" type="button"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="element__delete" aria-label="удалить" type="button"></button>
    </li>
  )
}

export default Card;
