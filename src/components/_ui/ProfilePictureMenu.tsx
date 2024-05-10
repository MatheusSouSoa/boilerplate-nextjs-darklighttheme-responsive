import usePictureMenuItems from "@/hooks/UsePictureMenuItems";
import LiPrimaryButton from "./LiPrimaryButton";
import { useMenuContext } from "@/context/MenuProvider";

const ProfilePictureMenu = () => {
  const pictureMenuItems = usePictureMenuItems();

  const { isProfileMenuOpen } = useMenuContext();

  return (
    <div className="fixed top-[46px] right-2 text-black text-sm">
      {isProfileMenuOpen && (
        <>
          <div className="w-3 h-3 bg-white border-zinc-400 border-l border-t fixed top-[40px] right-5 rotate-45" />
          <div className=" rounded-md bg-white border border-zinc-400 w-[320px] shadow-md p-3">
            <ul>
              {pictureMenuItems.map((menuItem, index) => (
                <LiPrimaryButton
                  key={index}
                  title={menuItem.title}
                  icon={menuItem.icon}
                  onClick={menuItem.onClick}
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePictureMenu;
