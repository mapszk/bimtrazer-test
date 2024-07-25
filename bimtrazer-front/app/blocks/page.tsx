import { getBlocks } from "@/actions/blocks";
import BlockCard from "@/components/Block";
import Container from "@/components/Container";
import { IBlock } from "@/interfaces/Block";
import LoggedLayout from "@/layouts/LoggedLayout";

export default async function Blocks() {
  const blocks = await getBlocks();

  return (
    <LoggedLayout>
      <Container>
        <div className="grid grid-cols-3 gap-8">
          {blocks.map((bl: IBlock) => (
            <BlockCard block={bl} key={bl._id} />
          ))}
        </div>
      </Container>
    </LoggedLayout>
  );
}
