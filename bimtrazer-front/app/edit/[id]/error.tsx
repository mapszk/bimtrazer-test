"use client";

import Container from "@/components/Container";
import LoggedLayout from "@/layouts/LoggedLayout";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  return (
    <LoggedLayout>
      <Container className="flex justify-center">
        <div className="shadow-md rounded-lg inline-flex flex-col p-10 items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p>{error.message}</p>
        </div>
      </Container>
    </LoggedLayout>
  );
}
