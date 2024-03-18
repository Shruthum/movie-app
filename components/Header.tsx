import Image from "next/image";
import DrawerComponent from "./Drawer";
import LinkComponent from "./LinksComponent";
import MovieInput from "./MovieInput";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <div className="relative bg-neutral-900 h-24 px-5 md:h-48 text-white md:pt-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4">
        <div className="md:hidden">
          <DrawerComponent />
        </div>
        <Link href={"/"}>
          <h2 className="font-semibold flex items-center gap-x-2 text-2xl md:text-3xl relative">
            <Image
              src={
                "https://movie4kto.net/images/group_1/theme_1/logo.png?v=0.1"
              }
              width={30}
              height={30}
              alt="Logo"
            />
            Movie4K
          </h2>
        </Link>
        <LinkComponent />
        <Button size={"sm"} variant={"ghost"}>
          <PlusCircle className="size-4 " />
        </Button>
      </div>
      <MovieInput className="absolute top-[80%] md:top-[89%] left-1/2 -translate-x-1/2 w-[80%] md:w-[70%]" />
    </div>
  );
}
