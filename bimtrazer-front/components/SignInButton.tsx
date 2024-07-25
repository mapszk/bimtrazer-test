"use client";

import { signIn } from "@/services/Auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignInButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const auth = async () => {
    try {
      setLoading(true);
      const res = await signIn();
      if (!res.ok) throw new Error();
      toast.success("Logged in");
      router.push("/blocks");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={auth}
      className="bg-blue-500 py-2 px-4 rounded-lg text-white"
      disabled={loading}
    >
      Ingresar
    </button>
  );
}
