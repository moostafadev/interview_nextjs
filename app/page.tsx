import Signout from "@/components/Signout";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/nextAuth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <header className="p-4 flex items-center justify-between bg-sky-800">
        <h2>Header</h2>
        <nav className="flex items-center gap-2">
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
        </nav>
      </header>
      <main className="p-10 flex items-center justify-center gap-2 flex-col">
        products
      </main>
      <footer className="p-4  bg-sky-900">Footer</footer>
    </>
  );
}
