"use client";

import Image from "next/image";
import { ImageType } from "./MovieCard";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type CarouselImageType = {
  images: ImageType;
  title: string;
};

const CarouselImages = ({ images, title }: CarouselImageType) => {
  return (
    <>
      <span className="text-2xl md:text-3xl mb-4 text-neutral-600 font-semibold space-y-2">
        {title}
      </span>
      <Carousel
        opts={{
          align: "center",
        }}
        className="relative mb-10"
      >
        <CarouselContent className="w-full max-w-xs space-x-1">
          {images.backdrops.map((item, index) => (
            <CarouselItem key={index} className="relative size-52 md:size-48">
              <Image
                key={index}
                src={`https://image.tmdb.org/t/p/w500${item.file_path}`}
                className="object-contain"
                fill
                alt={`${index}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[230px] size-12 left-[20%] md:left-[42%]" />
        <CarouselNext className="absolute top-[230px] size-12 right-[20%] md:right-[42%]" />
      </Carousel>
    </>
  );
};

export default CarouselImages;
