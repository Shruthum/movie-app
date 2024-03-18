
import dynamic from "next/dynamic";
import ButtonGroup from "@/components/ButtonGroup";
import { Loader } from "@/components/Loader";

const TrendingPage = dynamic(() => import("@/components/TrendingPage"), {
  ssr: false,
  loading: () => <Loader />
});

export default function Home() {
  return (
    <div className="max-w-6xl pt-10 md:pt-14 mx-auto relative min-h-[100svh]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold px-4 md:text-4xl">
          Trending Movies
        </h1>
        <ButtonGroup />
      </div>
      <TrendingPage />
    </div>
  );
}

