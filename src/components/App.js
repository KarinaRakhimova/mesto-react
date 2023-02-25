import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false)
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false)
const [selectedCard, setSelectedCard] = React.useState()

function handleEditProfileClick() {
  setProfilePopupOpen(true);
}
function handleAddPlaceClick() {
  setAddPlacePopupOpen(true);
}
function handleEditAvatarClick() {
  setAvatarPopupOpen(true);
}
function closeAllPopups() {
  setProfilePopupOpen(false);
  setAddPlacePopupOpen(false);
  setAvatarPopupOpen(false);
  setSelectedCard(null)
}

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={setSelectedCard} />
      <Footer />
      <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isEditProfilePopupOpen ? true : false} onClose={closeAllPopups}
        children={
          <>
            <input type="text" placeholder="Имя" className="popup__input popup__input_type_name" name="name" id="profile-name"
              required minLength="2" maxLength="40" />
            <span className="popup__input-error profile-name-error"></span>
            <input type="text" placeholder="О себе" className="popup__input popup__input_type_description" name="about" id="job-description"
              required minLength="2" maxLength="200" />
            <span className="popup__input-error job-description-error"></span>
          </>
        }
      />
      <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen ? true : false} onClose={closeAllPopups}
        children={
          <>
            <input type="url" placeholder="Ссылка на аватар" className="popup__input popup__input_type_avatar-link"
              name="avatar" id="avatar-link" required />
            <span className="popup__input-error avatar-link-error"></span>
          </>
        }
      />
      <PopupWithForm title="Новое место" name="element" isOpen={isAddPlacePopupOpen ? true : false} onClose={closeAllPopups}
        children={
          <>
            <input type="text" placeholder="Название" className="popup__input popup__input_type_element-name" name="name" id="element-name"
              required minLength="2" maxLength="30" />
            <span className="popup__input-error element-name-error"></span>
            <input type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_element-link"
              name="link" id="element-link" required />
            <span className="popup__input-error element-link-error"></span>
          </>
        }
      />
      <PopupWithForm title="Вы уверены?" name="confirm" isOpen={false} onClose={closeAllPopups}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
