"use client";

import * as Form from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { redirect } from "next/navigation";

const InputSchema = z.object({
  name: z.string().min(1).max(30),
});

export default function MovieInput({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  const form = useForm<z.infer<typeof InputSchema>>({
    resolver: zodResolver(InputSchema),
    defaultValues: {
      name: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const onSubmit = async ({ name }: z.infer<typeof InputSchema>) => {
    try {
      setLoading(true);
      window.location.assign(`/search?name=${name}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form.Form {...form}>
      <form className={`${className}`} onSubmit={form.handleSubmit(onSubmit)}>
        <Form.FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormControl>
                <Input
                  disabled={loading}
                  placeholder="Enter Keyword"
                  className="outline-none border-none text-neutral-900"
                  {...field}
                />
              </Form.FormControl>
            </Form.FormItem>
          )}
        />
        <Button
          disabled={loading}
          type="submit"
          variant={"ghost"}
          className="hidden group md:block md:bg-yellow-300 md:text-black md:absolute md:right-0 bottom-[0.1px]"
        >
          <ArrowRight className="size-4 group-hover:animate-ping transition duration-150" />
        </Button>
      </form>
    </Form.Form>
  );
}
