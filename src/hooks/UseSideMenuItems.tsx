import { Gear, House, Person, SoccerBall, User } from "phosphor-react";
import { ReactNode } from "react";

export interface SideMenuItem {
  title: string;
  path: string;
  icon: ReactNode;
}

const UseSideMenuItems = (): SideMenuItem[] => {
  const sideMenuItems: SideMenuItem[] = [
    {
      title: "Home",
      path: "/",
      icon: <House />,
    },
    {
      title: "Perfil",
      path: "/perfil",
      icon: <User />,
    },
    {
      title: "Pelada",
      path: "/pelada",
      icon: <SoccerBall />,
    },
    {
      title: "Configurações",
      path: "/configuracoes",
      icon: <Gear />,
    },
  ];

  return sideMenuItems;
};

export default UseSideMenuItems;
