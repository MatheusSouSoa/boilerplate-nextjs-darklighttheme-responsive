import { UserProfileProps } from "@/@types/User";
import { useMenuContext } from "@/context/MenuProvider";
import Image from "next/image";
import Link from "next/link";

export interface UserProfilePictureProps {
  name: string;
  profilePicture: string;
}

export interface ProfileCardProps {
  sideName: "left" | "right";
  hour?: string;
  logout?: boolean;
}

const UserProfilePicture = ({ user, profileCard }: UserProfileProps) => {
  const { toggleProfileMenu } = useMenuContext();

  return (
    <div className="flex text-xs justify-center items-center gap-2 ">
      {profileCard.sideName == "left" && (
        <Link
          className="hover:underline"
          href={"/perfil"}
        >
          {user.name}
        </Link>
      )}
      <button
        onClick={toggleProfileMenu}
        className="rounded-full border overflow-hidden flex items-center justify-center"
      >
        {user.profilePicture != "" ? (
          <Image
            src={user.profilePicture}
            alt={user.name}
            width={32}
            height={32}
            priority
          />
        ) : (
          <p className="text-center w-[24px] h-[24px] flex items-center justify-center bg-zinc-500">
            {user.name.charAt(0)}
          </p>
        )}
      </button>
      {profileCard.sideName == "right" && (
        <Link href={"/perfil"}>{user.name}</Link>
      )}
    </div>
  );
};

export default UserProfilePicture;
