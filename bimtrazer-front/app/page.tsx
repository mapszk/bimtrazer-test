import SignInButton from "@/components/SignInButton";

export default function Home() {
  return (
    <main className="w-11/12 max-w-[960px] mx-auto flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-2xl font-bold mb-4">Bimtrazer test</h1>
      <SignInButton />
    </main>
  );
}
