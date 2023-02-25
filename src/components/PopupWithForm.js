function PopupWithForm({title, name, children, isOpen, onClose}) {
  return(
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
    <div className="popup__container">
      <form className="popup__form" name={`${name}-form`} noValidate>
        <h3 className="popup__title">{title}</h3>
        {children}
        <button className="popup__save" type="submit">Сохранить</button>
      </form>
      <button className="popup__close" aria-label="закрыть" type="button" onClick={onClose}/>
    </div>
  </div>
  )
}

export default PopupWithForm;
