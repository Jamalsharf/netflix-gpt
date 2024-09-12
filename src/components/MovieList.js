import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6 bg-transparent text-white">
      <h1 className="text-xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
