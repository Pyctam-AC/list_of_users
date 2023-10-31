import React from 'react';
import { useState, useEffect } from "react";
//import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Users from '../Users/Users';
import Popup from '../Popup/Popup';
import usePopupClose from "../../hooks/usePopupClose";
import filterSearchMovies from '../../utils/filterSearcheMovies';
import {getUsers} from '../../utils/UsersApi';
import SearchForm from '../SearchForm/SearchForm';



function App() {

  const [isLoading, setIsLoading] = useState(false);


// стейт всех карточек
  const [usersAll, setUsersAll] = useState([]);

  const [usersRender, setUsersRender] = useState([]);


  const getUsersAll = () => {
    setIsLoading(true)
    getUsers()
      .then((res) => {
        console.log(res);
        setUsersAll(res);
        setUsersRender(res);

      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  };


  useEffect(() => {
    getUsersAll();
  }, [])

// делаем поиск карточек в полученном массиве при смене фильтра короткометражек
  const searchMovies = (data) => {
    const result = filterSearchMovies(usersAll, data);
    setUsersRender(result);
  }
// поиск карточек по сабмиту
  const handleSearcheUsers = (data) => {
    setSaveData(data);
    searchMovies(data)
  };


 // сохраняем текст запроса в стейт
  const [saveData, setSaveData] = useState(null);

  const resetSearch = () => {
    setSaveData(null);
    setUsersRender(usersAll);
  }


//логика попапов

// стейт видимости попап
  const [isPopupVisible, popupVisible] = useState(false);

  const [text, textPopupVisible] = useState(null);

  const openCardPopup = (card) => {
    popupVisible(true);
    textPopupVisible(card)
  }

// функция видимости попап
  const closeAllPopups = () => {
    popupVisible(false);
  };

// хук закрытия попапов
  usePopupClose(
    isPopupVisible,
    "popup_opened",
    closeAllPopups
  );



  return (
    <div className="page">
      <SearchForm
        handleSearcheUsers={(data) => handleSearcheUsers(data)}
        dataSearch={saveData}
        resetSearch={resetSearch}
      />
      <Users
        usersAll={usersRender}
        isLoading={isLoading}
        openCard={openCardPopup}
      />
      <Popup
        isOpen={isPopupVisible}
        text={text}
        onClose={closeAllPopups}
      />
    </div>
  );
};

export default App;
