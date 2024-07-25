"use client";

import { IBlock } from "@/interfaces/Block";
import Input from "./Input";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createBlock, deleteBlock, editBlock } from "@/services/Block";
import { useRouter } from "next/navigation";

interface Props {
  block?: IBlock;
}

export default function BlockForm({ block }: Props) {
  const edition = block?._id;
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!description) return toast.error("Ingrese una descripción");
    if (!progress) return toast.error("Ingrese un progreso");
    if (!startDate) return toast.error("Ingrese una fecha de inicio");
    if (!endDate) return toast.error("Ingrese una fecha de fin");
    if (Number(progress) > 100 || Number(progress) < 0)
      return toast.error("El progreso debe estar entre 0 y 100");
    if (Number(progress) < Number(block?.progress))
      return toast.error("El progreso no puede reducirse");
    if (new Date(startDate).getTime() >= new Date(endDate).getTime())
      return toast.error(
        "La fecha de inicio no puede ser posterior a la de fin"
      );

    try {
      setLoading(true);
      const res = block?._id
        ? await editBlock({
            ...block,
            progress: Number(progress),
            startDate,
            endDate,
          })
        : await createBlock(description, startDate, endDate, Number(progress));
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      if (edition) {
        toast.success("Bloque editado con éxito");
      } else {
        toast.success("Bloque creado con éxito");
        setDescription("");
        setStartDate("");
        setEndDate("");
        setProgress("");
      }
    } catch (err: any) {
      toast.error(err.message as string);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      const res = await deleteBlock(block?._id as string);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      router.push("/blocks");
    } catch (err: any) {
      toast.error(err.message as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (block) {
      setDescription(block.description);
      setStartDate(block.startDate.substring(0, 10));
      setEndDate(block.endDate.substring(0, 10));
      setProgress(block.progress.toString());
    }
  }, []);

  return (
    <form onSubmit={submit} className="flex flex-col gap-6">
      <Input
        label="Description"
        name="description"
        disabled={Boolean(edition)}
        placeholder="Description"
        value={description}
        onChange={(value) => setDescription(value)}
      />
      <Input
        label="Progress"
        name="progress"
        placeholder="Progress"
        value={progress}
        type="number"
        onChange={(value) => setProgress(value)}
      />
      <Input
        label="Start date"
        name="startDate"
        type="date"
        placeholder="Start date"
        value={startDate}
        onChange={(value) => setStartDate(value)}
      />
      <Input
        label="End date"
        name="endDate"
        type="date"
        placeholder="End date"
        value={endDate}
        onChange={(value) => setEndDate(value)}
      />
      <div className="flex items-center justify-between">
        {edition && (
          <button
            onClick={handleDelete}
            className="self-end bg-red-500 h-12 min-w-32 px-6 rounded-lg text-white"
            type="submit"
            disabled={loading}
          >
            Delete
          </button>
        )}
        <button
          className="ml-auto bg-blue-500 h-12 min-w-32 px-6 rounded-lg text-white"
          type="submit"
          disabled={loading}
        >
          {edition ? "Save changes" : "Create"}
        </button>
      </div>
    </form>
  );
}
