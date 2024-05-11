import usePictureMenuItems from "@/hooks/UsePictureMenuItems";
import LiPrimaryButton from "./LiPrimaryButton";
import { useMenuContext } from "@/context/MenuProvider";
import { useTheme } from "@/context/ThemeProvider";

const ProfilePictureMenu = () => {
  const pictureMenuItems = usePictureMenuItems();
  const { isProfileMenuOpen } = useMenuContext();
  const { theme } = useTheme();

  const isDarkTheme = theme === "dark";
  const containerClass = `font-semibold rounded-md ${
    theme !== "dark"
      ? "bg-white border border-zinc-400"
      : "bg-zinc-800 border border-zinc-400"
  } w-[320px] shadow-md p-3`;
  const triangleClass = `w-3 h-3 ${
    !isDarkTheme ? "bg-white border-zinc-400" : "bg-zinc-800 border-zinc-400"
  } bg-white border-zinc-400 border-l border-t fixed top-[40px] right-5 rotate-45`;

  return (
    <div
      className={`fixed top-[46px] right-2 ${
        theme == "dark" ? "text-white" : "text-black"
      } text-sm`}
    >
      {isProfileMenuOpen && (
        <>
          <div className={triangleClass} />
          <div className={containerClass}>
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
