import { Menu, School } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DarkMode from "../darkMode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;
  
  return (
    <div className="h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* {Desktop} */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10">
        <div className="flex items-center gap-2">
          <School size={"30"} />
          <h1 className="hidden md:block font-extrabold text-2xl">
            E-Learning
          </h1>
        </div>
        <div className="flex items-center gap-5">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage 
                  src="https://github.com/shadcn.png" />
                  
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem ><Link to="my-learning">My Learning</Link> </DropdownMenuItem>
                  <DropdownMenuItem>Editing Profile</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem> Dashboard</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button>
              <Button className="bg-gray-900 text-white hover:bg-gray-800">
                Signup
              </Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* {Mobile Device} */}

      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <h1 className="font-extrabold text-2xl">E-Learning</h1>
        <MobileNAvbar />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNAvbar = () => {
    const role = "instructor";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full bg-gray-200 hover:bg-gray-200"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="backdrop-blur-md bg-white/90 flex flex-col ">
        .{/* Header */}
        <div className="flex flex-row items-center justify-between mt-2 px-4">
          <h2 className="text-lg font-semibold">E-Learning</h2>
          <DarkMode />
        </div>
        <Separator className="my-4" />
        {/* Nav */}
        <nav className="flex flex-col space-y-4 px-6">
          <span className="text-base cursor-pointer hover:font-medium">
            My Learning
          </span>
          <span className="text-base cursor-pointer hover:font-medium">
            Edit Profile
          </span>
          <span className="text-base cursor-pointer hover:font-medium">
            Log out
          </span>
        </nav>
        {role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button className="w-full bg-[#0a0a23] text-white">
               Dashboard
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
        {/* Button */}
        <div className="px-6 mt-6 mb-2"></div>
      </SheetContent>
    </Sheet>
  );
};
