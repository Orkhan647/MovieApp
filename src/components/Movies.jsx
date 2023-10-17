"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Movies = ({ dt }) => {
    const router = useRouter()
  console.log(dt, "dt");
  return (
    <div onClick={()=> router.push(`/movie/${dt?.id}`)} className="w-[440px] relative imgContainer cursor-pointer">
      <Image
       style={{objectFit:"cover"}}
        width={440}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
        alt={dt?.title}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{dt?.title} </div>
        <div>{dt?.vote_average} - {dt?.release_date} </div>
      </div>
    </div>
  );
};

export default Movies;
