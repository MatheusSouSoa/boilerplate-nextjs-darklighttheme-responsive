import { useTheme } from "@/context/ThemeProvider";
import { ReactNode, useEffect } from "react";

export interface LiPrimaryButtonProps {
  title: string;
  icon?: ReactNode;
  onClick: () => void;
}

const LiPrimaryButton = ({title, icon, onClick} : LiPrimaryButtonProps) => {

  const { theme } = useTheme();

  return (
    <li>
      <button onClick={onClick} className={`bg-primary px-4 py-2 rounded-md flex justify-start items-center gap-2 ${theme !== 'dark' ? "hover:bg-zinc-300" : "hover:bg-zinc-600"} w-full`}>
        <div>
          {icon}
        </div>
        <div>
          {title}
        </div>
      </button>
    </li>
  )
}

export default LiPrimaryButton;