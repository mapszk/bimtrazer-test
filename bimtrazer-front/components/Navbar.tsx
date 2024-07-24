import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <Container>
      <nav className="flex gap-6 items-center py-10">
        <Link href="/blocks">Blocks</Link>
        <Link href="/create">New block</Link>
        <button className="ml-auto">Log out</button>
      </nav>
    </Container>
  );
}
