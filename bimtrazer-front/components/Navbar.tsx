import Link from "next/link";
import Container from "./Container";
import SignOutButton from "./SignOutButton";

export default function Navbar() {
  return (
    <Container>
      <nav className="shadow-md rounded-lg flex gap-6 items-center p-4 px-6 my-4 mb-8">
        <Link href="/blocks">Blocks</Link>
        <Link href="/create">Create</Link>
        <SignOutButton className="ml-auto" />
      </nav>
    </Container>
  );
}
