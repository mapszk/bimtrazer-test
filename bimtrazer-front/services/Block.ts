import { IBlock } from "@/interfaces/Block";

export const createBlock = (
  description: string,
  startDate: string,
  endDate: string
) =>
  fetch("/api/create", {
    method: "POST",
    body: JSON.stringify({
      description,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const editBlock = (block: IBlock) =>
  fetch("/api/edit/" + block.id, {
    method: "POST",
    body: JSON.stringify({
      description: block.description,
      startDate: new Date(block.startDate).toISOString(),
      endDate: new Date(block.endDate).toISOString(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
