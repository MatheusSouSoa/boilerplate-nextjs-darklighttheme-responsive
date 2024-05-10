import { useMenuContext } from "@/context/MenuContext";
import Link from "next/link";
import UserProfilePicture, { UserProfilePictureProps } from "./_ui/UserProfile";

const mockedUser: UserProfilePictureProps = {
  name: "Matheus Soares",
  profilePicture: "/images/profile_id.jpg",
};

const Header = () => {
  const { toggleMenu } = useMenuContext();

  return (
    <header className=" w-full bg-green-700 p-3 flex justify-between">
      <div className="flex gap-2">
        <button
          onClick={toggleMenu}
          className={`w-7 flex-col gap-1 items-center justify-center flex sm:hidden`}
        >
          <div className="w-full h-1 bg-white"></div>
          <div className="w-full h-1 bg-white"></div>
          <div className="w-full h-1 bg-white"></div>
        </button>
        <h1 className="font-black">
          <Link href={"/"}>Rachão</Link>
        </h1>
      </div>
      <div>
        <UserProfilePicture
          profileCard={{ sideName: "left", logout: true }}
          user={{
            name: mockedUser.name,
            profilePicture: mockedUser.profilePicture,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
