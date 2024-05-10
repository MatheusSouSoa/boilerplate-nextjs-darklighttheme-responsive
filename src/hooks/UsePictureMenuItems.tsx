import { LiPrimaryButtonProps } from "@/components/_ui/LiPrimaryButton"
import { Door, Gear, Moon } from "phosphor-react";


const usePictureMenuItems = () : LiPrimaryButtonProps[] => {
  const PictureMenuItems: LiPrimaryButtonProps [] = [
    {
      title:  "Configurações",
      icon: <Gear/>
    }, 
    {
      title:  "Tema",
      icon: <Moon />
    }, 
    {
      title:  "Sair",
      icon: <Door />
    }, 
  ]

  return PictureMenuItems
}

export default usePictureMenuItems;