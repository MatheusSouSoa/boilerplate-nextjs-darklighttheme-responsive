import { useTheme } from "@/context/ThemeProvider";

export interface SelectProps {
  type?: "default" | "transparent";
  children: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
}

const Select = ({ type, children, onChange, value }: SelectProps) => {
  const { theme } = useTheme();

  const bg = theme === "dark" ? "bg-zinc-600" : "border-zinc-400 bg-zinc-100";

  if (type === "transparent") {
    return (
      <select
        onChange={() => onChange}
        value={value}
        className="px-2 p-1 border bg-transparent border-gray-200 rounded-md outline-none"
      >
        {children}
      </select>
    );
  } else {
    return (
      <select
        onChange={onChange}
        value={value}
        className={`px-2 p-1 border rounded-lg ${bg} outline-none border-zinc-300 `}
      >
        {children}
      </select>
    );
  }
};

export default Select;
