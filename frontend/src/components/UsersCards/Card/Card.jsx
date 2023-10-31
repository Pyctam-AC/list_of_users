/* eslint-disable react/prop-types */
import './Card.css';
import smartphone from '../../../images/icon_smartphone.svg'
import email from '../../../images/icon_email.svg'


const Card = ({ card, openCard }) => {

  const handleClick = () => {
    openCard(card)
  }

  return (
    <li className="user__item"
      onClick={handleClick}
    >
      <div className="user-container"      >
        <h2 className="user__title">{card.name}</h2>
        <p className="user__text">
          <img
            className='user__text-icon'
            src={smartphone}
            alt='иконка смартфона'/>
          {card.phone}
        </p>
        <p className="user__text">
          <img
            className='user__text-icon'
            src={email}
            alt='иконка смартфона'/>
          {card.email}
        </p>
      </div>
    </li>
  );
};

export default Card;
