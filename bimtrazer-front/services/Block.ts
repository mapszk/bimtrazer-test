import { IBlock } from "@/interfaces/Block";

export const createBlock = (
  description: string,
  startDate: string,
  endDate: string,
  progress: number
) =>
  fetch("/api/block", {
    method: "POST",
    body: JSON.stringify({
      description,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
      progress,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const editBlock = (block: IBlock) =>
  fetch("/api/block/" + block._id, {
    method: "PATCH",
    body: JSON.stringify({
      progress: block.progress,
      id: block._id,
      startDate: new Date(block.startDate).toISOString(),
      endDate: new Date(block.endDate).toISOString(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
