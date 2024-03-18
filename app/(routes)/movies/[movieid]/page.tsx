import { MovieType } from "@/components/TrendingPage";
import dynamic from "next/dynamic";
import { Loader } from "@/components/Loader";

const MovieCard = dynamic(() => import("@/components/MovieCard"), {
  ssr: false,
  loading: () => <Loader />,
});

export type MovieById = {
  belongs_to_collection: Pick<
    MovieType,
    "id" | "title" | "backdrop_path" | "poster_path"
  >;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  imdb_id: string;
  movie: MovieType;
  production_companies: Pick<MovieType, "id" | "name" | "origin_country"> & {
    logo_path: string;
  };
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_language: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  video: boolean;
  title: string;
  overview: string;
};

async function getMoviebyId(movieid: string): Promise<any> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: process.env.AUTH as string,
      },
    }
  );

  if (!response.ok) {
    throw new Error("error while fetching the data");
  }
  return response.json();
}
async function getMovieImages(movieid: string): Promise<any> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}/images`,
    {
      headers: {
        accept: "application/json",
        Authorization: process.env.AUTH as string,
      },
    }
  );

  if (!response.ok) {
    throw new Error("error while fetching the data");
  }
  return response.json();
}

export default async function MovieIdPage({
  params,
}: {
  params: { movieid: string };
}) {
  const movie = await getMoviebyId(params.movieid);
  const images = await getMovieImages(params.movieid);

  return (
    <>
      <MovieCard movie={movie} images={images} />
    </>
  );
}
