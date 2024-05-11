import { useTheme } from "@/context/ThemeProvider";

export interface DefaultInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "number";
  value: string | number;
  placeholder?: string;
  disabled?: boolean;
}

const DefaultInput = ({
  onChange,
  value,
  placeholder,
  disabled,
  type,
}: DefaultInputProps) => {
  const { getInputClassName } = useTheme();

  const bgClassName = getInputClassName();

  return (
    <input
      className={`${bgClassName} rounded-md outline-none focus:border ${
        bgClassName.includes("bg-zinc-200") ? "border-black" : "border-zinc-200"
      } px-2 w-full`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export { DefaultInput };
