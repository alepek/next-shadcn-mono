import { TRPCReactProvider } from "@/trpc/client";
import { AppThemeProvider } from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </TRPCReactProvider>
  );
}
