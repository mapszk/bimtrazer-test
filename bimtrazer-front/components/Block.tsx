import { IBlock } from "@/interfaces/Block";
import Link from "next/link";

interface Props {
  block: IBlock;
}

export default function BlockCard({ block }: Props) {
  const formatDate = (date: string) => new Date(date).toLocaleString("es-AR");

  return (
    <Link
      href={`/edit/${block._id}`}
      className="h-44 flex flex-col shadow-md p-4 gap-2 rounded-lg"
    >
      <p title={block.description} className="line-clamp-2">
        {block.description}
      </p>
      <span className="text-sm text-slate-500 mt-auto">
        Start date: {formatDate(block.startDate)}
      </span>
      <span className="text-sm text-slate-500">
        End date: {formatDate(block.endDate)}
      </span>
      <div className="flex mt-1 items-center gap-2">
        <div className="rounded-lg overflow-hidden h-1 w-full bg-slate-200">
          <div className="h-1 bg-blue-500" style={{ width: "45%" }}></div>
        </div>
        <span className="text-xs">{block.progress}%</span>
      </div>
    </Link>
  );
}
