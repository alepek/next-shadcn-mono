"use client";

import { CommitData } from "@/trpc/router";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@workspace/ui/components/chart";
import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { CartesianGrid, Area, AreaChart, Text } from "recharts";
import { useMemo } from "react";

type GraphData = {
  date: string;
  commits: number;
};

export function CommitChart({
  commitDataList,
}: {
  commitDataList?: CommitData[];
}) {
  const formattedData = useMemo(() => {
    let data: GraphData[] = [];
    try {
      if (commitDataList) {
        data = commitDataList.flatMap((commitData) =>
          commitData.days.map((commits, index) => {
            const date = new Date(commitData.week * 1000);
            date.setDate(date.getDate() + index);
            return {
              date: date.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              }),
              commits,
            };
          })
        );
      }
    } catch {
      data = [];
    }
    return data;
  }, [commitDataList]);

  return (
    <Card className="h-[10rem] w-full pb-0 gap-2">
      <CardHeader>
        <CardTitle>Next.js commits last 12 months</CardTitle>
      </CardHeader>
      <ChartContainer
        config={{
          commits: {
            label: "Commits",
            color: "var(--chart-4)",
          },
        }}
        className="aspect-auto h-full w-full p-0"
      >
        <AreaChart data={formattedData} key={JSON.stringify(formattedData)}>
          <defs>
            <linearGradient id="fillCommits" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="20%"
                stopColor="var(--color-commits)"
                stopOpacity={0.75}
              />
              <stop
                offset="99%"
                stopColor="var(--color-commits)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Text>Next.js commit history - last year</Text>
          <CartesianGrid vertical={false} />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                labelFormatter={(value, data) => {
                  return data[0]?.payload.date;
                }}
                indicator="dot"
              />
            }
          />
          <Area
            dataKey="commits"
            type="natural"
            fill="url(#fillCommits)"
            stroke="var(--color-commits)"
            stackId="a"
            isAnimationActive
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  );
}
