import SignInButton from "@/components/SignInButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-11/12 max-w-[960px] mx-auto flex justify-center items-center min-h-screen flex-col">
      <div className="relative w-[500px] h-[150px] mb-4">
        <Image
          src="/logo.png"
          fill={true}
          className="absolute object-contain"
          alt="Logo"
        />
      </div>
      <SignInButton />
    </main>
  );
}
