"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTAwMGMxZTJmZmQzMWIxMDMyODEwODUzZjFiYjdhMSIsInN1YiI6IjY1MTJiNDVjMjZkYWMxMDEyZDVjY2M1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.reYMu-ggbqpNNtLRwVwifxgL0Xd0OUPiuDBPicSby7M";
const headers = {
  Authorization: `Bearer ${apiKey}`,
  accept: "application/json",
};

const getMovie = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const res = await fetch(url, { headers });
  return await res.json();
};

const Page = ({ params }) => {
  const id = params.id;
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovie(id);
        setMovieDetail(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="relative p-7 min-h-screen">
      <Image
      style={{objectFit:"cover"}}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}/>
        <div className="absolute">
            <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
            <div className="w-1/2">{movieDetail?.overview}</div>
             <div className="my-3">{movieDetail?.vote_average} - {movieDetail?.release_date} </div>
             <div className=" my-2 border w-32 hover:bg-white hover:text-black p-2 rounded-md text-center text-lg cursor-pointer">Trail</div>
        </div>
    </div>
  );
};

export default Page;
