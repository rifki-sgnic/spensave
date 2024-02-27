import { Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="bg-blue-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl">Spensave</h1>
        <Link href="/login" color="white">Login</Link>
      </div>

      <div className="container mx-auto p-2 flex flex-col grow gap-4">
        <div className="flex flex-col">
          <strong>Welcome to Spensave!</strong>
        </div>
      </div>
    </main>
  );
}
