import { createTRPCContext } from "./init";
import { appRouter } from "./router";

export const caller = appRouter.createCaller(createTRPCContext);
