"use client";
import { Button } from "@workspace/ui/components/button";
import { toast } from "sonner";

export default function Page() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
          Home 🏡
        </h2>
        <p className="mt-2 text-lg/8 ">
          Welcome to the home page! Here you can find all the latest news and
          updates.
        </p>
      </div>

      <div>
        <Button size="sm" onClick={() => toast("Hey hey")}>
          Sonner
        </Button>
      </div>
    </div>
  );
}
