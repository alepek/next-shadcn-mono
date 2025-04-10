import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export type CommitData = {
  total: number;
  week: number;
  days: number[];
};

export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

export const appRouter = router({
  listPosts: publicProcedure.query(async () => {
    const data = await fetch("https://api.vercel.app/blog");
    const posts: Post[] = await data.json();
    return posts;
  }),
  getPost: publicProcedure.input(z.number()).query(async ({ input }) => {
    const data = await fetch(`https://api.vercel.app/blog/${input}`);
    const post: Post = await data.json();
    return post;
  }),
  getNextJsCommitData: publicProcedure.query(async () => {
    const data = await fetch(
      "https://api.github.com/repos/vercel/next.js/stats/commit_activity"
    );
    const commitData: CommitData[] = await data.json();
    return commitData;
  }),
});

export type AppRouter = typeof appRouter;
