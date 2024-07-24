import BlockForm from "@/components/BlockForm";
import Container from "@/components/Container";
import LoggedLayout from "@/layouts/LoggedLayout";
import { cookies } from "next/headers";

const getData = async (id: string) => {
  try {
    const res = await fetch("http://localhost:3000/block/" + id, {
      headers: {
        Authorization: `Bearer ${cookies().get("access_token")?.value}`,
      },
    });
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

interface Props {
  params: {
    id: string;
  };
}

export default async function Blocks({ params }: Props) {
  const block = await getData(params.id);
  return (
    <LoggedLayout>
      <Container>
        <BlockForm block={block} />
      </Container>
    </LoggedLayout>
  );
}
