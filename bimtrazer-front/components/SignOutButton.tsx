"use client";

import { signOut } from "@/actions/auth";
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
      await signOut();
      toast.success("Logged out");
      router.push("/");
    } catch (err) {
      toast.error("Something went wrong");
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
      Sign out
    </button>
  );
}
