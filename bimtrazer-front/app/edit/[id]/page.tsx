import { getBlock } from "@/actions/blocks";
import BlockForm from "@/components/BlockForm";
import Container from "@/components/Container";
import LoggedLayout from "@/layouts/LoggedLayout";

interface Props {
  params: {
    id: string;
  };
}

export default async function Blocks({ params }: Props) {
  const block = await getBlock(params.id);

  return (
    <LoggedLayout>
      <Container>
        <BlockForm block={block} />
      </Container>
    </LoggedLayout>
  );
}
