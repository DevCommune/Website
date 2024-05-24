"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import { Dialog, DialogClose } from "@radix-ui/react-dialog";
import {
  BlocksIcon,
  CirclePlus,
  Frown,
  Layers3,
  LayoutDashboard,
  LogIn,
  SquareArrowOutUpRight,
  SquareArrowUpRight,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { ModeToggle } from "../layout/Mode-Toggle";
import {
  ClerkLoaded,
  ClerkLoading,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";
import { usePathname } from "next/navigation";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Create Profile",
    href: "/profile/new",
    description: "create a new profile",
  },
  {
    title: "My Profiles",
    href: "/",
    description: "View all your profiles",
  },
  // {
  //   title: "Third Tab",
  //   href: "/",
  //   description: "Write some wavy here to get them to click.",
  // },
];

const NavBar = () => {
  const { userId } = useAuth();
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <div className="flex fixed top-0 left-0 min-w-full justify-between px-5 py-3 border-b z-40 dark:bg-black/50 backdrop-blur-lg bg-white ">
      <div className="flex justify-between w-full min-[825px]:hidden">
        {/* <Dialog>
          <SheetTrigger className="p-2 transition">
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Next Starter</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href={`/profile/${userId}`}>
                  <Button variant="outline" className="w-full">
                    Dashboard
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                {!userId && (
                  <Link
                    href="/sign-in"
                    legacyBehavior
                    passHref
                    className="cursor-pointer"
                  >
                    <Button variant="outline">Sign Up</Button>
                  </Link>
                )}
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog> */}
        <Link href="/" className="pl-2 flex items-center justify-center">
          <Image
            src="/logo/devcommune.png"
            alt="logo"
            width={45}
            height={45}
            className=""
          />
        </Link>
        <div className="flex items-center gap-3">
          <ModeToggle />
          {userId ? (
            <>
              <ClerkLoaded>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-9 w-9",
                    },
                  }}
                />
              </ClerkLoaded>
              <ClerkLoading>
                <Skeleton className="h-9 w-9 rounded-full bg-gray-400/40 " />
              </ClerkLoading>
            </>
          ) : (
            <Link
              href="/sign-in"
              className="w-9 h-9 bg-slate-50/20 rounded-full flex items-center justify-center"
            >
              <LogIn className="w-4 h-4 stroke-slate-300 mr-1 lg:hidden" />
            </Link>
          )}
          <Dialog>
            <SheetTrigger className="p-2 transition">
              <GiHamburgerMenu />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Next Starter</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-3 mt-[1rem]">
                <DialogClose asChild>
                  <Link href="/">
                    <Button variant="outline" className="w-full">
                      Home
                    </Button>
                  </Link>
                </DialogClose>
                <DialogClose asChild>
                  <Link href={`/profile/${userId}`}>
                    <Button variant="outline" className="w-full">
                      Dashboard
                    </Button>
                  </Link>
                </DialogClose>
                <DialogClose asChild>
                  {!userId && (
                    <Link
                      href="/sign-in"
                      legacyBehavior
                      passHref
                      className="cursor-pointer"
                    >
                      <Button variant="outline">Sign Up</Button>
                    </Link>
                  )}
                </DialogClose>
              </div>
            </SheetContent>
          </Dialog>
        </div>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="max-[825px]:hidden flex gap-3 w-[100%] justify-between">
          <Link href="/" className="pl-2 flex items-center justify-center">
            <Image
              src="/logo/devcommune.png"
              alt="logo"
              width={70}
              height={70}
              className=""
            />
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="lg:flex items-center gap-5 hidden">
        <Link
          href="/community"
          target="blank"
          className="max-[825px]:hidden flex items-center gap-1"
        >
          <p className="pl-1">Community</p>
          <SquareArrowOutUpRight size={16} className="text-gray-500" />
        </Link>
        {userId ? (
          <>
            {pathname.includes("/profile") ? (
              <Link href={"/"} className="max-[825px]:hidden">
                <Button size="sm" className="rounded-lg" variant="outline">
                  <p className="pl-1">Return Home</p>
                </Button>
              </Link>
            ) : (
              <Link
                href={`/profile/${user?.username}`}
                className="max-[825px]:hidden"
              >
                <Button size="sm" className="rounded-lg" variant="outline">
                  <p className="pl-1">Dashboard</p>
                </Button>
              </Link>
            )}

            <ClerkLoaded>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-9 w-9",
                  },
                }}
              />
            </ClerkLoaded>
            <ClerkLoading>
              <Skeleton className="h-9 w-9 rounded-full bg-gray-400/40 " />
            </ClerkLoading>
          </>
        ) : (
          <Link href="/sign-in" className="max-[825px]:hidden">
            <Button size="sm" className="rounded-lg" variant="outline">
              <LogIn className="w-4 h-4" />
              <p className="pl-1">Sign In</p>
            </Button>
          </Link>
        )}

        <ModeToggle />
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;
