/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.css';


const SearchForm = ({
  handleSearcheUsers,
  dataSearch,
  resetSearch
}) => {

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    handleSearcheUsers(data.search);
  };

  useEffect(() => {
      let defaultValues = {};
      defaultValues.search = dataSearch;
      reset({ ...defaultValues });
  }, [dataSearch, reset]);

  return (
    <section className="page__wraper">
      <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("search", {
            required: "хоть одну букву напиши для поиска",
          })}
          name="search"
          type="text"
          className="search-input"
          placeholder="name user"
          errors="true"
        />
        {errors && (
          <span className="error">{errors["search"]?.message || ""}</span>
        )}
        <button type="submit" className="find-button" />

        <button type="button" className="reset-button"
          onClick={resetSearch}
        />

      </form>
    </section>
  );
};

export default SearchForm;
