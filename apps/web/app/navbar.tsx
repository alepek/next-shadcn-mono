import "@workspace/ui/globals.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";
import Link from "next/link";
import { DarkModeToggle } from "@/components/dark-mode";
import React from "react";

export default function RootNavBar() {
  return (
    <div className="p-4 flex justify-between">
      <NavigationMenu className="flex gap-2 sticky top-2">
        <Link href="/" passHref legacyBehavior>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </Link>
        <Link href="/stats" passHref legacyBehavior>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Stats
          </NavigationMenuLink>
        </Link>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
            <NavigationMenuContent className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              <Link href="/blog/with-rsc" legacyBehavior passHref>
                <NavigationMenuLink>
                  <div className="text-sm font-medium leading-none">
                    With RSC
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    This example loads the blog posts using React Server
                    Components and the next.js loading.tsx feature.
                  </p>
                </NavigationMenuLink>
              </Link>
              <Link href="/blog/with-tanstack-query" legacyBehavior passHref>
                <NavigationMenuLink>
                  <div className="text-sm font-medium leading-none">
                    With Tanstack Query
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    This example loads the blog posts using Tanstack Query on
                    the client, via trpc.
                  </p>
                </NavigationMenuLink>
              </Link>
              <Link href="/blog/with-trpc-ssr" legacyBehavior passHref>
                <NavigationMenuLink>
                  <div className="text-sm font-medium leading-none">
                    With trpc SSR
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    This example uses trpc on the server.
                  </p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <Link href="/help" passHref legacyBehavior>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Help
          </NavigationMenuLink>
        </Link>
      </NavigationMenu>
      <DarkModeToggle />
    </div>
  );
}
