import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logoImage from "@/assets/logo.png";
import { authUser } from "../../context/AuthContext";

function Navbar() {
  const [expandSidebar, setExpandSidebar] = useState(true);
  const { user } = authUser();

  return (
    <>
      <div className="h-17 border rounded-md border-zinc-800 text-white">
        <nav className="p-4">
          <div className="flex flex-row row-3 justify-between">
            <div className="-mt-2">
              <div className="flex gap-3">
                <Link to={"/"}>
                  <img src={logoImage} alt="Logo" className="w-15" />
                </Link>
                <Label>Resource Checker</Label>
              </div>
            </div>
            <div className="flex gap-10 text-[1.2em]">
              <Link to={"/"}>
                <Button className="font-bold" variant="ghost">
                  Home
                </Button>
              </Link>

              <Link to={"/chat"}>
                <Button className="font-bold" variant="ghost">
                  Chat
                </Button>
              </Link>
              <Link to={"/about"}>
                <Button className="font-bold" variant="ghost">
                  About
                </Button>
              </Link>
            </div>
            <div className="flex gap-5">
              <Link
                to="https://github.com/Amit4218/simple-local-ai-chat"
                target="_blank"
              >
                <IoLogoGithub className="mt-1 size-[2.3em]" />
              </Link>
              {user == null ? (
                <div className="text-black -mt-1">
                  <Link to={"/auth/login"}>
                    <Button
                      variant=""
                      className="bg-zinc-900 hover:bg-amber-50 hover:text-black font-bold  cursor-pointer mt-2"
                    >
                      Login
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Avatar className="size-[2.4rem]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Button
                    // onClick={logout}
                    variant="destructive"
                    className="cursor-pointer"
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
