import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <Container>
      <nav className="shadow-md rounded-lg flex gap-6 items-center p-4 px-6 my-4 mb-8">
        <Link href="/blocks">Blocks</Link>
        <Link href="/create">New block</Link>
        <button className="ml-auto">Log out</button>
      </nav>
    </Container>
  );
}
