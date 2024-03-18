"use client";

import { Plus } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

type ComponentProps = {
  title: string;
  href: string;
  child: string[];
  size?: "sm" | "lg" | "default" | "icon" | "xs";
};

export default function PopoverComponent({
  title,
  child,
  href,
  className,
  size,
  ...props
}: ComponentProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button size={size} variant={"ghost"} className={className}>
          <Plus className="size-3" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-max">
        <section className="grid grid-cols-2 gap-4">
          {child.map((child, index) => (
            <Link key={index} href={`${href}/${child.toLowerCase()}`} className={"text-slate-500 hover:text-slate-900 transition-colors duration-150"}>
              {child}
            </Link>
          ))}
        </section>
      </PopoverContent>
    </Popover>
  );
}
