import { createBlock, updateBlock } from "@/actions/blocks";
import { IBlock } from "@/interfaces/Block";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useBlockForm({
  block,
  edition,
}: {
  block?: IBlock;
  edition: boolean;
}) {
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!description) return toast.error("Description is required");
    if (!progress) return toast.error("Progress is required");
    if (!startDate) return toast.error("Start date is required");
    if (!endDate) return toast.error("End date is required");

    if (description.length > 40)
      return toast.error("Description max length is 40");
    if (Number(progress) > 100 || Number(progress) < 0)
      return toast.error("Progress must be between 0 and 100");
    if (Number(progress) < Number(block?.progress))
      return toast.error("Progress cannot be reduced");
    if (new Date(startDate).getTime() >= new Date(endDate).getTime())
      return toast.error("End date must be greater than start date");

    try {
      setLoading(true);
      block?._id
        ? await updateBlock({
            ...block,
            progress: Number(progress),
            startDate,
            endDate,
          })
        : await createBlock({
            description,
            startDate,
            endDate,
            progress: Number(progress),
          });
      if (edition) {
        toast.success("Block edited");
      } else {
        toast.success("Block created");
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

  return {
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
  };
}
