/* eslint-disable react/prop-types */
import './Popup.css'

const Popup = ({ isOpen, onClose, text, closeOverlay }) => {

  return (
    <div
      className={`popup ${
        isOpen ? "popup_opened" : ""
      }`}
      onClick={closeOverlay}
    >
      <div className="popup__container">
        <section className="popup__text-container">
          <h3 className="popup__container-title">
            {text?.name}
            <button
              type="button"
              className="popup__close-button"
              onClick={onClose}>
            </button>
          </h3>
          <ul className="popup__contacts-container">
              <li className="popup__contacts-data">
                <p className="popup__contacts-key">Телефон:</p>
                <p className="popup__contacts-value">{text?.phone}</p>
              </li>
              <li className="popup__contacts-data">
                <p className="popup__contacts-key">Почта:</p>
                <p className="popup__contacts-value">{text?.email}</p>
              </li>
              <li className="popup__contacts-data">
                <p className="popup__contacts-key">Дата приёма:</p>
                <p className="popup__contacts-value">{text?.hire_date}</p>
              </li>
              <li className="popup__contacts-data">
                <p className="popup__contacts-key">Должность:</p>
                <p className="popup__contacts-value">{text?.position_name}</p>
              </li>
              <li className="popup__contacts-data">
                <p className="popup__contacts-key">Подразделение:</p>
                <p className="popup__contacts-value">{text?.department}</p>
              </li>
            </ul>
            <div className="popup__dop-info">
              <h4 className="dop-info__title">Дополнительная информация:</h4>
              <p className="dop-info__text">
                Разработчики используют текст в качестве заполнителя макeта страницы.
                Разработчики используют текст в качестве заполнителя макeта страницы.
              </p>

            </div>
        </section>


      </div>
    </div>
  );
}

export default Popup;
