import { authOptions } from "@/lib/nextAuth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Signout from "./Signout";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <header className="p-4 bg-green-700">
        <div className="container flex items-center justify-between gap-8">
          <Link href={"/"} className="text-2xl font-bold">
            DigitalH
          </Link>
          <nav className="flex items-center justify-between gap-2 flex-1">
            <ul className="flex items-center gap-4">
              <li>
                <Link href={"/products"} className="text-lg font-semibold">
                  Products
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              {session?.user ? (
                <>
                  <Link href={"/admin"}>
                    <Button>Dashboard</Button>
                  </Link>
                  <Signout />
                </>
              ) : (
                <Link href={"/auth/signin"}>
                  <Button>Login</Button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </header>
      <main className="flex flex-col gap-10 py-10">{children}</main>
      <footer className="p-4 bg-green-700">
        <div className="container">Footer</div>
      </footer>
    </>
  );
};

export default MainLayout;
