import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="p-4">Header</header>
      <main className="p-10 flex items-center justify-center">
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
      </main>
      <footer className="p-4 bg-neutral-400">Footer</footer>
    </>
  );
}
