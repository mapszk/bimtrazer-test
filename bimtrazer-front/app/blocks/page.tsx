import BlockCard from "@/components/Block";
import Container from "@/components/Container";
import { IBlock } from "@/interfaces/Block";
import LoggedLayout from "@/layouts/LoggedLayout";
import { cookies } from "next/headers";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/block", {
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

export default async function Blocks() {
  const blocks = await getData();

  return (
    <LoggedLayout>
      <Container>
        <div className="grid grid-cols-3 gap-8">
          {blocks.map((bl: IBlock) => (
            <BlockCard block={bl} key={bl.id} />
          ))}
        </div>
      </Container>
    </LoggedLayout>
  );
}
