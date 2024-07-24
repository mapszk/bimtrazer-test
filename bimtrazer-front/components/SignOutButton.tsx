"use client";

import { signOut } from "@/services/Auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  className?: string;
}

export default function SignOutButton({ className }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const auth = async () => {
    try {
      setLoading(true);
      const res = await signOut();
      if (!res.ok) throw new Error();
      toast.success("Sesión finalizada");
      router.push("/");
    } catch (err) {
      toast.error("Ha ocurrido un error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={auth}
      className={
        "bg-blue-500 py-2 px-4 rounded-lg text-white" + " " + className
      }
      disabled={loading}
    >
      Salir
    </button>
  );
}
