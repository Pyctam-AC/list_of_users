// запрос получения списка фильмов

import { USERS_URL } from "./constans/usersUrl"

const getResult = (res) => {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject (`Ошибка: ${res.status}`)
  }
};

export const getUsers = () => {
  return fetch(`${USERS_URL}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => getResult (res))
}
