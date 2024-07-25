"use server";

import { IBlock, ICreateBlockDTO } from "@/interfaces/Block";
import { cookies } from "next/headers";

export async function getBlocks() {
  const res = await fetch("http://localhost:3000/block", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  else return data;
}

export async function getBlock(id: string) {
  const res = await fetch("http://localhost:3000/block/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  else return data;
}

export async function createBlock(block: ICreateBlockDTO) {
  const { description, progress, startDate, endDate } = block;
  const res = await fetch("http://localhost:3000/block", {
    method: "POST",
    body: JSON.stringify({ description, progress, startDate, endDate }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  else return data;
}

export async function updateBlock(block: IBlock) {
  const { _id: id, progress, startDate, endDate } = block;
  const res = await fetch("http://localhost:3000/block/" + id, {
    method: "PATCH",
    body: JSON.stringify({ id, progress, startDate, endDate }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  else return data;
}

export async function deleteBlock(id: string) {
  const res = await fetch("http://localhost:3000/block/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  else return data;
}
