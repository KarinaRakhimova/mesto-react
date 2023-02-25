import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick} ) {
//const [userInfo, setUserInfo] = React.useState({}) возможна такая реализация - вся инфо о пользователе в одной стейт-переменной?
const [userName, setUserName] = React.useState('')
const [userDescription , setUserDescription ] = React.useState('')
const [userAvatar, setUserAvatar] = React.useState('')
const [cards, setCardsInfo] = React.useState([])

React.useEffect(() => {
  Promise.all([api.getInitialProfile(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    setUserName(userData.name);
    setUserDescription(userData.about);
    setUserAvatar(userData.avatar);
    //setUserInfo(userData);
    setCardsInfo(cardsData);
  })
  .catch(err => console.log(`Ошибка ${err}`));
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <article className="profile__info">
          <img className="profile__avatar" src={userAvatar} alt="аватар профиля" onClick={onEditAvatar}/>
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button className="profile__edit" aria-label="изменить" type="button" onClick={onEditProfile}></button>
        </article>
        <button className="add-element" aria-label="добавить" type="submit" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map(card => (<Card key={card._id} card={card} onCardClick={onCardClick}/>))}
        </ul>
      </section>
    </main>
  )
}

export default Main;
