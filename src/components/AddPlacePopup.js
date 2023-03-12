import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup ({isOpen, onClose, onAddPlace, isLoading}) {

 const [cardInfo, setCardInfo] = React.useState({
  name: '',
  link:''
})

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace(cardInfo);
  }

  return(
  <PopupWithForm title="Новое место" name="element" isOpen={isOpen ? true : false} onClose={onClose}
  buttonText={isLoading ? "Сохранение...":'Сохранить'}
        children={
          <>
            <input type="text" placeholder="Название" className="popup__input popup__input_type_element-name" name="name" id="element-name"
              required minLength="2" maxLength="30" value={cardInfo.name} onChange={evt=>setCardInfo({...cardInfo, name: evt.target.value})}/>
            <span className="popup__input-error element-name-error"></span>
            <input type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_element-link"
              name="link" id="element-link" required value={cardInfo.link} onChange={evt=>setCardInfo({...cardInfo, link: evt.target.value})}/>
            <span className="popup__input-error element-link-error"></span>
          </>
        }
        onSubmit={handleSubmit}
      />
  )
}

export default AddPlacePopup;
