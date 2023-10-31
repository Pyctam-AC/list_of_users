/* eslint-disable react/prop-types */
import './UsersCards.css';
import Card from './Card/Card';

function UsersCards({users, openCard}) {


  return (
    <section
      className="page__wraper"
      aria-label="список сотрудников"
    >
      <ul className="card-users">

          {users?.map((item) => (
            <Card
              card={item}
              key={item.phone}
              openCard={openCard}
            />
          ))}

      </ul>
    </section>
  );
}

export default UsersCards;
