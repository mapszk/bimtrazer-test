import { getBlocks } from "@/actions/blocks";
import BlockCard from "@/components/Block";
import Container from "@/components/Container";
import { IBlock } from "@/interfaces/Block";
import LoggedLayout from "@/layouts/LoggedLayout";
import Link from "next/link";

export default async function Blocks() {
  const blocks = await getBlocks();

  return (
    <LoggedLayout>
      <Container>
        {blocks.length ? (
          <div className="grid grid-cols-3 gap-8">
            {blocks.map((bl: IBlock) => (
              <BlockCard block={bl} key={bl._id} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="shadow-md rounded-lg flex flex-col p-10 items-center justify-center">
              <h1 className="text-2xl font-bold mb-4">
                Start creating some blocks!
              </h1>
              <Link
                className="bg-blue-500 py-2 px-4 rounded-lg text-white"
                href="/create"
              >
                Create
              </Link>
            </div>
          </div>
        )}
      </Container>
    </LoggedLayout>
  );
}
