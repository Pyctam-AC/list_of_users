// проверяем на совпадения в поиске
const searchUsers = (
  name,
  searchLowerCase,
  ) => {
  return name.includes(searchLowerCase);
};

// проверяем основные запросы
const filterSearchMovies = (
  res,
  searchText,
  )  => {
  return res.filter(user => {
    return searchUsers(user.name.toLowerCase(), searchText.toLowerCase());
  });
}

export default filterSearchMovies;
