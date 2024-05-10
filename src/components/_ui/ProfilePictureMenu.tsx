import usePictureMenuItems from "@/hooks/UsePictureMenuItems";
import LiPrimaryButton from "./LiPrimaryButton";
import { useMenuContext } from "@/context/MenuContext";

const ProfilePictureMenu = () => {
  const pictureMenuItems = usePictureMenuItems();

  const { isProfileMenuOpen } = useMenuContext();

  return (
    <div className="fixed top-[46px] right-2 text-black text-sm">
      {isProfileMenuOpen && (
        <>
          <div className="w-3 h-3 bg-white fixed top-[42px] right-5 rotate-45" />
          <div className=" rounded-md bg-white border w-[320px] shadow-md p-3">
            <ul>
              {pictureMenuItems.map((menuItem, index) => (
                <LiPrimaryButton
                  key={index}
                  title={menuItem.title}
                  icon={menuItem.icon}
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
