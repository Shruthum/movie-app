"use client"

import {useEffect,useState} from "react";
import axios, {AxiosResponse} from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  title: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};

export default function TrendingPage() {

  const [data,setData] = useState<AxiosResponse<any,any>>()
  useEffect(()=>{
    async function trendingpagefetch() {
      const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/week`,
          {
            params: {
              language: "en-US",
            },
            headers: {
              Accept: "application/json",
              Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDViYjgyOWE5NDRkNjM1MzY5NTRhZTczYWMyMmM2NSIsInN1YiI6IjY0NmY4MjM3MzM2ZTAxMDEwOTcxNGIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6VSdY25cHOfp0nYDYsuNTog3attvnZ-1nqHbgkTnp6Q",
            },
          }
        );
      setData(response)
    }
    trendingpagefetch()
  },[])

  const setlocation = (result:MovieType) => {
      if(result.title!==undefined){
          window.location.assign(`/movies/${result.id}`)
      }
      else if(result.name){
          window.location.assign(`/movies/${result.id}`)
      }
  }
  return (
    <div className="md:px-10 pt-5 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 md:gap-2 pb-10 ">
      {data?.data.results.map((result: MovieType, index: number) => (
        <Card
          key={index}
          onClick={() => setlocation(result)}
          className={`overflow-hidden rounded h-48 md:rounded-none relative group cursor-pointer`}
        >
          <CardHeader>
            <CardTitle className="text-xl absolute left-3 z-10 -bottom-20 group-hover:bottom-2 text-black transition-all duration-200">
              {result.name && <span>{result.name}</span>}
              {result.title && <span>{result.title}</span>}
            </CardTitle>
          </CardHeader>
          <CardContent className={"group-hover:opacity-50"}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
              fill
              alt={index.toString()}
              className="object-fill"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
