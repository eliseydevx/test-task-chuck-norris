import React, { useState } from "react";
import "./InputSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchJokes } from "../../store/jokesSlice";

function InputSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { jokes, isLoading } = useSelector((state: RootState) => state);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    if (e.target.value.length > 2) {
      dispatch(fetchJokes(e.target.value));
    }
  };

  return (
    <div className="input-search_block">
      <input
        className="input-search"
        type="text"
        placeholder="Search jokes..."
        onChange={handleSearch}
        value={searchTerm}
        autoFocus
      />

      <p className="input-search_count">Found jokes: {jokes?.length}</p>
      {/* {isLoading && <p>Loading...</p>} */}
    </div>
  );
}

export default InputSearch;
