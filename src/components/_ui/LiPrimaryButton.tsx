import { ReactNode } from "react";

export interface LiPrimaryButtonProps {
  title: string;
  icon?: ReactNode;
}

const LiPrimaryButton = ({title, icon} : LiPrimaryButtonProps) => {
  return (
    <li>
      <button className="bg-primary px-4 py-2 rounded-md flex justify-start items-center gap-2 hover:bg-zinc-300 w-full">
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