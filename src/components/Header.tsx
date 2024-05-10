import { useMenuContext } from "@/context/MenuProvider";
import Link from "next/link";
import UserProfilePicture, { UserProfilePictureProps } from "./_ui/UserProfile";
import { SoccerBall } from "phosphor-react";
import ProfilePictureMenu from "./_ui/ProfilePictureMenu";
import { ClickOutsideDetector } from "./_ui/ClickOutsideDetector";

const mockedUser: UserProfilePictureProps = {
  name: "Matheus Soares",
  profilePicture: "/images/profile_id.jpg",
};

const Header = () => {
  const { toggleMenu, isProfileMenuOpen, toggleProfileMenu } = useMenuContext();

  return (
    <header className=" w-full bg-white p-3 h-12 flex justify-between shadow-xl">
      <div className="flex items-center gap-2">
        <button
          onClick={toggleMenu}
          className={`w-7 flex-col gap-1 items-center justify-center flex sm:hidden`}
        >
          <div className="w-full h-1 bg-black"></div>
          <div className="w-full h-1 bg-black"></div>
          <div className="w-full h-1 bg-black"></div>
        </button>
        <h1 className="font-black">
          <Link
            className="rounded-full bg-green-700 px-2 p-1 flex flex-col items-center justify-center"
            href={"/"}
          >
            <div className="flex">
              <p className="hidden sm:block">Rachão</p>
              <SoccerBall
                size={24}
                className="animate-spin ani"
              />
            </div>
            <div className="hidden sm:flex w-full justify-end pr-2">
              <hr className="bg-white w-10" />
            </div>
          </Link>
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <ClickOutsideDetector
          onClickOutside={toggleProfileMenu}
          isOpen={isProfileMenuOpen}
        >
          <UserProfilePicture
            profileCard={{ sideName: "left", logout: true }}
            user={{
              name: mockedUser.name,
              profilePicture: mockedUser.profilePicture,
            }}
          />
          <ProfilePictureMenu />
        </ClickOutsideDetector>
      </div>
    </header>
  );
};

export default Header;
