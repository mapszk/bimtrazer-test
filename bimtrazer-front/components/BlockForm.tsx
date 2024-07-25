"use client";

import { IBlock } from "@/interfaces/Block";
import Input from "./Input";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useBlockForm from "@/hooks/useBlockForm";
import { deleteBlock } from "@/actions/blocks";

interface Props {
  block?: IBlock;
}

export default function BlockForm({ block }: Props) {
  const edition = Boolean(block?._id);
  const router = useRouter();

  const {
    description,
    setDescription,
    progress,
    setProgress,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    loading,
    setLoading,
    submit,
  } = useBlockForm({ block, edition });

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteBlock(block?._id as string);
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
