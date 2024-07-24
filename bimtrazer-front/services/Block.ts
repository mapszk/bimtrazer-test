import { IBlock } from "@/interfaces/Block";
import { cookies } from "next/headers";

export const createBlock = (
  description: string,
  startDate: string,
  endDate: string
) =>
  fetch("/api/block", {
    method: "POST",
    body: JSON.stringify({
      description,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  });

export const editBlock = (block: IBlock) =>
  fetch("/api/block/" + block.id, {
    method: "PATCH",
    body: JSON.stringify({
      description: block.description,
      startDate: new Date(block.startDate).toISOString(),
      endDate: new Date(block.endDate).toISOString(),
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  });
