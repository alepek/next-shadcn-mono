"use client";
import { ChartExample } from "@/components/chart";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { toast } from "sonner";

export default function Page() {
  return (
    <div className="flex items-center justify-center max-w-lg mx-auto">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">The home page</h1>
        <Button size="sm" onClick={() => toast("Hey hey")}>
          Sonner
        </Button>
        <ChartExample />
      </div>
    </div>
  );
}
