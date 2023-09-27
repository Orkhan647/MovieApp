"use client";

import React, { useEffect, useState } from "react";
import Movies from "@/components/Movies";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const searchParams = useSearchParams();
  const [data, setData] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genre = searchParams.get("genre");
        setSelectedGenre(genre);

        let url;

        if (genre === "popular") {
          url = `${baseUrl}movie/popular?language=en-US&page=1`;
        } else if (genre === "top_rated") {
          url = `${baseUrl}movie/top_rated?language=en-US&page=1`;
        } else if (genre === "upcoming") {
          url = `${baseUrl}movie/upcoming?language=en-US&page=1`;
        } else {
          url = `${baseUrl}trending/all/day?language=en-US`;
        }

        const apiKey =
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTAwMGMxZTJmZmQzMWIxMDMyODEwODUzZjFiYjdhMSIsInN1YiI6IjY1MTJiNDVjMjZkYWMxMDEyZDVjY2M1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.reYMu-ggbqpNNtLRwVwifxgL0Xd0OUPiuDBPicSby7M";
        const headers = {
          Authorization: `Bearer ${apiKey}`,
          accept: "application/json",
        };

        const res = await fetch(url, { headers });
        const jsonData = await res.json();
        setData(jsonData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data ? (
        data.map((dt, i) => <Movies key={i} dt={dt} />)
      ) : (
        <div>Veri Yükleniyor...</div>
      )}
    </div>
  );
};

export default Page;
