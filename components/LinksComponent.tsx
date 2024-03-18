import { Links as links } from "./Drawer";
import { Label } from "@/components/ui/label";
import HoverCardComponent from "@/components/HoverCardComponent";

export default function LinkComponent() {
  return (
    <div className="hidden md:block">
      <section className="flex items-center justify-between gap-x-6">
        {links.map((link, index) => (
          <Label
            key={index}
            className="text-neutral-500 hover:text-white transition-colors duration-150"
          >
            {link.child ? (
              <HoverCardComponent
                title={link.title}
                childs={link.child}
                href={link.title}
              />
            ) : (
              <HoverCardComponent title={link.title} href={link.title} />
            )}
          </Label>
        ))}
      </section>
    </div>
  );
}
