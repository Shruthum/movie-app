import * as HoverCard from "@/components/ui/hover-card";
import Link from "next/link";
export default function HoverCardComponent({
  title,
  childs,
  href,
}: {
  title: string;
  childs?: string[];
  href: string;
}) {
  return (
    <HoverCard.HoverCard>
      {childs? <HoverCard.HoverCardTrigger>{title}</HoverCard.HoverCardTrigger> : <Link href={`${href.toLowerCase()}`}>{title}</Link>  }
      {childs && (
        <HoverCard.HoverCardContent className={"w-full"}>
          <section className="grid grid-cols-2 gap-4">
            {childs.map((child, index) => (
              <Link key={index} href={`${href}/${child.toLowerCase()}`} className={"text-slate-500 hover:text-slate-900 transition-colors duration-150"}>
                {child}
              </Link>
            ))}
          </section>
        </HoverCard.HoverCardContent>
      )}
    </HoverCard.HoverCard>
  );
}
