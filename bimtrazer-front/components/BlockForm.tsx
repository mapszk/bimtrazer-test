"use client";

import { IBlock } from "@/interfaces/Block";
import Input from "./Input";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createBlock, editBlock } from "@/services/Block";

interface Props {
  block?: IBlock;
}

export default function BlockForm({ block }: Props) {
  const edition = block?._id;
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
    try {
      setLoading(true);
      const res = block?.id
        ? await editBlock({ ...block, description, startDate, endDate })
        : await createBlock(description, startDate, endDate, Number(progress));
      if (!res.ok) throw new Error();
      toast.success("Bloque creado con éxito");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setProgress("");
    } catch (err) {
      toast.error("Ha ocurrido un error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (block) {
      setDescription(block.description);
      setStartDate(block.startDate);
      setEndDate(block.endDate);
      setProgress(block.progress.toString());
    }
  }, []);

  return (
    <form onSubmit={submit} className="flex flex-col gap-6">
      <Input
        label="Descripción"
        name="description"
        disabled={Boolean(edition)}
        placeholder="Descripción"
        value={description}
        onChange={(value) => setDescription(value)}
      />
      <Input
        label="Progreso"
        name="progress"
        placeholder="Progreso"
        value={progress}
        type="number"
        onChange={(value) => setProgress(value)}
      />
      <Input
        label="Inicio"
        name="startDate"
        type="date"
        placeholder="Inicio"
        value={startDate}
        onChange={(value) => setStartDate(value)}
      />
      <Input
        label="Fin"
        name="endDate"
        type="date"
        placeholder="Fin"
        value={endDate}
        onChange={(value) => setEndDate(value)}
      />
      <div className="flex items-center justify-between">
        {edition && (
          <button
            className="self-end bg-red-500 h-12 min-w-32 px-6 rounded-lg text-white"
            type="submit"
            disabled={loading}
          >
            Eliminar
          </button>
        )}
        <button
          className="ml-auto bg-blue-500 h-12 min-w-32 px-6 rounded-lg text-white"
          type="submit"
          disabled={loading}
        >
          {edition ? "Guardar cambios" : "Crear"}
        </button>
      </div>
    </form>
  );
}
