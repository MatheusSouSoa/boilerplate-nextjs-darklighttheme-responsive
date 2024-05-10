import Image from "next/image";
import Link from "next/link";

export interface UserProfilePictureProps {
  name: string;
  profilePicture: string;
}

export interface ProfileCardProps {
  sideName: "left" | "right";
}

export interface UserProfileProps {
  user: UserProfilePictureProps;
  profileCard: ProfileCardProps;
}

const UserProfilePicture = ({ user, profileCard }: UserProfileProps) => {
  return (
    <div className="flex text-xs justify-center items-center gap-2">
      {profileCard.sideName == "left" && <Link href={'/perfil'}>{user.name}</Link>}
      <button className="rounded-full border overflow-hidden">
        {user.profilePicture != "" ?
          <Image
            src={user.profilePicture}
            alt={user.name}
            width={24}
            height={24}
          /> : 
          <p className="text-center w-[24px] h-[24px] flex items-center justify-center bg-zinc-500">{user.name.charAt(0)}</p>
        }
      </button>
      {profileCard.sideName == "right" && <Link href={'/perfil'}>{user.name}</Link>}
    </div>
  );
};

export default UserProfilePicture;
