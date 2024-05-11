import { useTheme } from "@/context/ThemeProvider";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const BtnMinimalist = ({ children, onClick }: ButtonProps) => {
  const { theme } = useTheme();

  const isLightTheme: boolean = theme === "light";

  if (isLightTheme) {
    return (
      <button
        onClick={() => onClick()}
        className={`flex items-center justify-center px-2 p-1 rounded-md font-bold bg-zinc-800 hover:bg-zinc-600 text-white`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={() => onClick()}
      className={`flex items-center justify-center px-2 p-1 rounded-md font-bold bg-zinc-700 hover:bg-zinc-500 text-white
        } `}
    >
      {children}
    </button>
  );
};

const BtnPrimary = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className={`flex items-center justify-center px-2 p-1 rounded-md font-bold text-white bg-green-500 hover:bg-green-600`}
    >
      {children}
    </button>
  );
};

export { BtnPrimary, BtnMinimalist };
