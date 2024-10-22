"use client";

import Image from "next/image";
import { MoviesResponse } from "@/types/movies";
import getMoviesData from "@/apis/getMoviesData";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const CSRMovies = () => {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery<MoviesResponse>({
    queryKey: ["moviesCSR"],
    queryFn: getMoviesData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies?.results.map((movie) => (
          <div
            key={movie.id}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={movie.posterUrl}
              alt={movie.title}
              width={500}
              height={500}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-gray-500">{movie.genre}</p>
              <p className="text-yellow-500">
                ⭐ {movie.starRating.toFixed(1)}
              </p>
              <p className="mt-2 text-gray-700">
                {movie.description.slice(0, 100)}...
              </p>
              <p className="mt-2 text-gray-400 text-sm">{movie.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSRMovies;
