/* eslint-disable react/prop-types */
import './Users.css';
import UsersCards from '../UsersCards/UsersCards';
import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';



const Users = ({ usersAll, isLoading, openCard }) => {


  return (
    <div className="page__wraper">
      {isLoading ? <Preloader /> : null}
      {usersAll?.length && !isLoading ? (
        <UsersCards
          users={usersAll}
          openCard={openCard}
        />
      ) : (
        !isLoading && <p className="movies__not-found">Таких сотрудников нет</p>
      )}
    </div>
  );
};

export default Users;
