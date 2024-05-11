import { LiPrimaryButtonProps } from "@/components/_ui/LiPrimaryButton";
import { useTheme } from "@/context/ThemeProvider";
import { Door, Gear, Moon, Sun } from "phosphor-react";

const usePictureMenuItems = (): LiPrimaryButtonProps[] => {
  const { theme, toggleTheme } = useTheme();

  const PictureMenuItems: LiPrimaryButtonProps[] = [
    {
      title: "Configurações",
      icon: <Gear />,
      onClick: () => {},
    },
    {
      title: "Tema",
      icon: theme === "dark" ? <Sun /> : <Moon />,
      onClick: toggleTheme,
    },
    {
      title: "Sair",
      icon: <Door />,
      onClick: () => {},
    },
  ];

  return PictureMenuItems;
};

export default usePictureMenuItems;
