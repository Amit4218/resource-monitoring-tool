import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendPostRequest } from "../lib/apiRequest";
import { authUser } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "react-toastify";

function LoginPage() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const data = { email: userEmail, password: userPassword };
  const navigate = useNavigate();
  const { setUser } = authUser();

  const handelSubmit = async () => {
    try {
      const response = await sendPostRequest(data, "/auth/login");
      setUser(response.data.userInfo);
      toast.success(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error: ", error.message);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm  bg-zinc-900 text-white">
        <CardHeader>
          <CardTitle className="text-center my-2" >Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handelSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            variant="outline"
            type="submit"
            className="w-full text-black font-bold hover:bg-amber-100 cursor-pointer"
            onClick={handelSubmit}
          >
            Login
          </Button>
        </CardFooter>
        <CardAction>
          <Link to={"/auth/register"}>
            <Button className=" text-white ml-3 text-xs" variant="link">
              Not a member yet? Sign Up
            </Button>
          </Link>
        </CardAction>
      </Card>
    </div>
  );
}

export default LoginPage;
