interface Props {
  label: string;
  name: string;
  placeholder: string;
  value?: string | number;
  type?: string;
  onChange: (value: string) => any;
}

export default function Input({
  label,
  name,
  placeholder,
  value,
  type,
  onChange,
}: Props) {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input
        className="border-[1px] mt-1 border-gray-300 rounded-lg h-12 w-full px-4"
        type={type || "text"}
        id={name}
        value={value || ""}
        placeholder={placeholder}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          onChange(evt.target.value)
        }
      />
    </div>
  );
}
