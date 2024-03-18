
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { Button } from "./ui/button";
import { Menu, Plus } from "lucide-react";
import Link from "next/link";
import { Label } from "./ui/label";
import PopoverComponent from "./PopoverComponent";

export const Links = [
  {
    title: "Genre",
    href: "genre",
    child: [
      "Action",
      "Adventure",
      "Biography",
      "Crime",
      "Comedy",
      "Drama",
      "Horror",
      "Music",
      "News",
      "Romance",
      "Talk",
      "Kids",
      "History",
      "Reality",
      "Mystery",
      "Thriller",
      "War",
    ].toSorted(),
  },
  {
    title: "Country",
    href: "country",
    child: [
      "Australia",
      "India",
      "United States of America",
      "United Kingdom",
      "China",
      "Taiwan",
      "Russia",
      "Poland",
      "Austria",
      "Brazil",
      "Japan",
      "Malaysia",
    ].toSorted(),
  },
  {
    title: "Movies",
    href: "movies",
  },
  {
    title: "TV Shows",
    href: "tv-shows",
  },
  {
    title: "Top IMDB",
    href: "top-imdb",
  },
  {
    title: "Android App",
    href: "app",
  },
];

export default function SheetComponent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"}>
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[17rem]">
        <div className="w-[14rem] mx-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl">Home</SheetTitle>
          </SheetHeader>
          <div className="mt-10">
            <div className="flex flex-col gap-4">
              {Links.map(
                (link, index) =>
                  link.href && (
                    <Label
                      key={index}
                      className="group font-medium text-lg text-slate-500 hover:text-black transition-colors duration-150"
                    >
                      <section className="flex items-center justify-between px-2">
                        {link.child ? (
                          <>
                            {link.title}
                            <PopoverComponent
                              title={link.title}
                              href={link.href}
                              child={link.child}
                              size="xs"
                              className="opacity-55 group-hover:opacity-100 transition-colors duration-150"
                            />
                          </>
                        ) : (
                          <Link href={link.href}>{link.title}</Link>
                        )}
                      </section>
                    </Label>
                  )
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
