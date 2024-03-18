"use client";

import { Button } from "./ui/button";
import { Play, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

export type ImageType = {
  backdrops: {
    "aspect-ratio": number;
    height: number;
    iso_639_1: any;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
  posters: {
    "aspect-ratio": number;
    height: number;
    iso_639_1: any;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
};



type MovieCardProps = {
  movie: any;
  images: ImageType;
};

const CarouselImage = dynamic(() => import("@/components/CarouselImage"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center text-xl">Loading...</div>
  ),
});

export default function MovieCard({ movie, images }: MovieCardProps) {
  return (
    <>
      <motion.div
        className="flex xl:min-h-[70dvh] items-center justify-between gap-x-3 md:gap-x-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.3,
        }}
      >
        <div className="relative basis-2/5 md:basis-1/5 bg-gray-200 py-24 md:py-32 shadow-[0px_2px_10px_1px_#1d1d1f] group opacity-90 rounded-md">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            fill
            alt={movie.title}
            className="object-fill group-hover:scale-95 group-hover:opacity-100 transition-all duration-150"
          />
        </div>
        <div className="flex flex-col pl-1 gap-y-2 md:gap-y-3 basis-[60%] md:basis-4/5 pt-5">
          <div className="flex justify-between">
            <Button
              className="rounded-full bg-yellow-300 text-[#1d1d1f] hover:text-white transition-colors duration-150"
              size={"sm"}
            >
              <Play className="size-4" />
              Watch Now
            </Button>
            <Button
              className="rounded-full bg-yellow-300 text-[#1d1d1f] hover:text-white transition-colors duration-150"
              size={"sm"}
            >
              <Plus className="size-4" />
              Add to favorite
            </Button>
          </div>
          <span className="text-xl md:text-3xl lg:text-4xl font-medium md:font-semibold">
            {movie.original_title}
            <br />
            <span className="text-neutral-400 text-sm">{movie.tagline}</span>
          </span>
          <div className="text-[8px] text-yellow-600">
            IMDB :
            <Link
              aria-label="Redirect to IMDB website"
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              className="pl-1 hover:text-black transition-colors duration-150"
            >
              {movie.title}
            </Link>
          </div>
          <section
            aria-label="Overview of the movie"
            className="text-gray-500 text-xs"
          >
            {movie.overview}
          </section>
          <div
            aria-label="link to for different genre"
            className="flex gap-x-2"
          >
            {movie.genres?.map((item: any, index: number) => (
              <Link
                href={`/genre/${item.name.toLowerCase()}`}
                className="rounded-full text-black grid place-content-center text-nowrap bg-yellow-300 p-1 px-3 mt-2 hover:text-[#1d1d1f] text-xs hover:bg-slate-200 transition-colors duration-150"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <section className="text-xs">
            <span aria-label="release-date" className="gap-x-1 flex">
              Released:<p>{movie.release_date}</p>
            </span>
            <div aria-label="duration">Duration: {movie.runtime} min</div>
            <div aria-label="countries" className="">
              Country:{" "}
              {movie.production_countries.map((country: any, index: number) => (
                <span>{country.name} </span>
              ))}
            </div>
            <section aria-label="production-company" className="">
              {movie.production_companies.map((item: any, index: number) => {
                <div key={index}>
                  <div>
                    {item.name} {item.origin_country}
                  </div>
                  <div className="relative size-40">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}
                      alt={`production_image_${index}`}
                      fill
                    />
                  </div>
                </div>;
              })}
            </section>
          </section>
        </div>
      </motion.div>
      <div className="mt-10 md:mt-5 pb-20 px-2">
        <CarouselImage images={images} title="Posters" />
      </div>
    </>
  );
}
