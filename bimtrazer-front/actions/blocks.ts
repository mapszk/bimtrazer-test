"use server";

import { API_BASE_URL } from "@/constants/api";
import { IBlock, ICreateBlockDTO } from "@/interfaces/Block";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function getBlocks() {
  const res = await fetch(API_BASE_URL + "/block", {
    method: "GET",
    next: {
      tags: ["blocks"],
    },
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
  const res = await fetch(API_BASE_URL + "/block/" + id, {
    method: "GET",
    next: {
      tags: ["block"],
    },
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
  revalidateTag("blocks");
  const { description, progress, startDate, endDate } = block;
  const res = await fetch(API_BASE_URL + "/block", {
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
  revalidateTag("block");
  const { _id: id, progress, startDate, endDate } = block;
  const res = await fetch(API_BASE_URL + "/block/" + id, {
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
  const res = await fetch(API_BASE_URL + "/block/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message);
  }
}
