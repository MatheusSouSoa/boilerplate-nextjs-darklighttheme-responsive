import { Gear, House, Person, PokerChip, Screencast, SoccerBall, User, X } from "phosphor-react";
import { ReactNode } from "react";

export interface SideMenuItem {
  title: string;
  path: string;
  icon?: ReactNode;
}

const UseSideMenuItems = (): SideMenuItem[] => {
  const sideMenuItems: SideMenuItem[] = [
    {
      title: "Inputs e buttons",
      path: "/",
      icon: <House />,
    },
    {
      title: "Modal",
      path: "/modal",
      icon: <PokerChip />,
    },
    {
      title: "Displays",
      path: "/display",
      icon: <Screencast />,
    },
    {
      title: "Not Found",
      path: "/404",
      icon: <X />,
    },
  ];

  return sideMenuItems;
};

export default UseSideMenuItems;
