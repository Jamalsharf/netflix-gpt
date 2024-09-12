import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS, OPENAI_KEY } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const searMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const genAI = new GoogleGenerativeAI(OPENAI_KEY);
  const handleGptSearchClick = async () => {
    const searchQuery =
      "Act as movie recommendation system and suggest movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the given result ahead. Example Result:vikram,mankatha,jailer,master,thunivu";

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(searchQuery);
    const response = await result.response;
    const text = response.text();
    const gptMovies = text.split(",");

    const promiseArray = gptMovies.map((movie) => searMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
