"use server";

import { IBlock, ICreateBlockDTO } from "@/interfaces/Block";
import { cookies } from "next/headers";

export async function getBlocks() {
  return fetch("http://localhost:3000/block", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      else return res.json();
    })
    .catch((err) => {
      return err;
    });
}

export async function getBlock(id: string) {
  return fetch("http://localhost:3000/block/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      else return res.json();
    })
    .catch((err) => {
      return err;
    });
}

export async function createBlock(block: ICreateBlockDTO) {
  const { description, startDate, endDate, progress } = block;
  return fetch("http://localhost:3000/block", {
    method: "POST",
    body: JSON.stringify({ description, startDate, endDate, progress }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      else return res.json();
    })
    .catch((err) => {
      return err;
    });
}

export async function updateBlock(block: IBlock) {
  const { _id: id, progress, startDate, endDate } = block;
  return fetch("http://localhost:3000/block/" + id, {
    method: "PATCH",
    body: JSON.stringify({ id, progress, startDate, endDate }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      else return res.json();
    })
    .catch((err) => {
      return err;
    });
}

export async function deleteBlock(id: string) {
  return fetch("http://localhost:3000/block/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      else return res.json();
    })
    .catch((err) => {
      return err;
    });
}
