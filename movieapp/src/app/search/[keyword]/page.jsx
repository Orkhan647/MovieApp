"use client"
import React, { useEffect, useState } from 'react';
import Movies from '@/components/Movies';

const Page = ({ params }) => {
  const [data, setData] = useState(null); // data adlı durum değişkeni
  const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTAwMGMxZTJmZmQzMWIxMDMyODEwODUzZjFiYbqpNNtLRwVwifxgL0Xd0OUPiuDBPicSby7M";
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    accept: "application/json",
  };
  const keyword = params.keyword;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&include_adult=false&language=en-US&page=1`;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, { headers });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(); // fetchData işlevini bileşen yüklendiğinde çağırın
  }, [url, headers]);

  return (
    <div>
      {!data?.results ? 
        <div>Searches did not yield results</div>
       : 
        data?.results?.map((dt, i) => <Movies key={i} dt={dt} />)
      }
    </div>
  );
};

export default Page;
