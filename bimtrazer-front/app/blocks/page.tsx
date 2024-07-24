import BlockCard from "@/components/Block";
import Container from "@/components/Container";
import { IBlock } from "@/interfaces/Block";
import LoggedLayout from "@/layouts/LoggedLayout";

const blocks: IBlock[] = [
  {
    id: "6671997cfcac3e0bfbe8607c",
    description:
      "SUPER FANCY STAIRS SUPER FANCY STAIRSSUPER FANCY STAIRS SUPER FANCY STAIRS SUPER FANCY STAIRS",
    startDate: "2024-06-03T00:00:00",
    endDate: "2024-06-03T23:59:59",
    progress: 75,
  },
  {
    id: "6671997cfcac34e0bfbe8607c",
    description: "SUPER FANCY STAIRS",
    startDate: "2024-06-03T00:00:00",
    endDate: "2024-06-03T23:59:59",
    progress: 75,
  },
  {
    id: "6671997cfcac3e03bfbe8607c",
    description: "SUPER FANCY STAIRS",
    startDate: "2024-06-03T00:00:00",
    endDate: "2024-06-03T23:59:59",
    progress: 75,
  },
  {
    id: "6671997cfcac3e0b2fbe8607c",
    description: "SUPER FANCY STAIRS",
    startDate: "2024-06-03T00:00:00",
    endDate: "2024-06-03T23:59:59",
    progress: 75,
  },
  {
    id: "6671997cfcac3e60bfbe8607c",
    description: "SUPER FANCY STAIRS",
    startDate: "2024-06-03T00:00:00",
    endDate: "2024-06-03T23:59:59",
    progress: 75,
  },
];

export default function Blocks() {
  return (
    <LoggedLayout>
      <Container>
        <div className="grid grid-cols-3 gap-8">
          {blocks.map((bl) => (
            <BlockCard block={bl} key={bl.id} />
          ))}
        </div>
      </Container>
    </LoggedLayout>
  );
}
