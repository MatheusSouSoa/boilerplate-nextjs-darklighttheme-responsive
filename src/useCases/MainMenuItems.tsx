import { Gear, House, Person, SoccerBall, User } from "phosphor-react";
import { ReactNode } from "react";

export interface SideMenuItemsProps {
  title: string;
  path: string;
  icon: ReactNode;
}

const sideMenuItems: SideMenuItemsProps[] = [
  {
    title: "Perfil",
    path: "/perfil",
    icon: <User />,
  },
  {
    title: "Home",
    path: "/",
    icon: <House />,
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

export default sideMenuItems;	