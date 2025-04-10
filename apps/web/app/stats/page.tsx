"use client";
import { useTRPC } from "@/trpc/client";
import Heading from "./heading";
import { CommitChart } from "@/components/commit-chart";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.getNextJsCommitData.queryOptions());

  return (
    <div className="flex flex-col gap-12">
      <Heading />
      <div className="flex gap-4 justify-between flex-wrap md:flex-nowrap">
        <CommitChart commitDataList={data} />
      </div>
    </div>
  );
}
