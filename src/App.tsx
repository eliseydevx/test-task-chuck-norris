import React, { useState } from "react";
import "./App.css";
import InputSearch from "./components/InputSearch/InputSearch";
import CardComponent from "./components/CardComponent/CardComponent";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { fetchJokes } from "./store/jokesSlice";

function App() {
  const { jokes, isLoading } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const [displayedJokes, setDisplayedJokes] = useState<number>(8);

  const handleLoadMore = () => {
    setDisplayedJokes((prev) => prev + 8);
  };

  console.log(jokes);

  return (
    <div className="app">
      <InputSearch />

      <div className="app-container">
        {jokes.slice(0, displayedJokes).map((joke, index) => (
          <CardComponent
            // large={displayedJokes <= 2}
            large={index < 2}
            value={joke.value}
            date={joke.created_at}
            id={joke.id}
            key={joke.id}
            url={joke.url}
          />
        ))}
      </div>

      {displayedJokes < jokes.length && (
        <button className="load-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default App;
