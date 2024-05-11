import { ProfileCardProps, UserProfilePictureProps } from "@/components/_ui/UserProfile";

export interface UserProps {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  profilePictureURl: string;
}

export interface IAuthenticateUser {
  execute(email: string, password: string): Promise<UserProps | null>;
}

export interface UserProfileProps {
  user: UserProfilePictureProps;
  profileCard: ProfileCardProps;
}
