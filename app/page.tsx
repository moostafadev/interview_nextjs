import { authOptions } from "@/lib/nextAuth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <header className="p-4">Header</header>
      <main className="p-10 flex items-center justify-center gap-2 flex-col">
        <h1>{session.user.name ?? "No name available"}</h1>
        <p>{session.user.email ?? "No email provided"}</p>
        {session.user.image ? (
          <Image
            src={session.user.image}
            alt={`Profile Picture of ${session.user.name ?? "user"}`}
            width={100}
            height={100}
            className="rounded-full"
          />
        ) : (
          <div className="w-[100px] h-[100px] bg-gray-300 rounded-full flex items-center justify-center text-sm text-gray-600">
            No Image
          </div>
        )}
      </main>
      <footer className="p-4 bg-neutral-400">Footer</footer>
    </>
  );
}
