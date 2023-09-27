"use client";
import Image from "next/image";
const Movies = ({ dt }) => {
  console.log(dt, "dt");
  return (
    <div className="w-[440px] relative imgContainer cursor-pointer">
      <Image
        width={440}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt.backdrop_path || dt.poster_path
        }`}
        alt={dt.title}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{dt.title} </div>
        <div>{dt.vote_average} - {dt.release_date} </div>
      </div>
    </div>
  );
};

export default Movies;
