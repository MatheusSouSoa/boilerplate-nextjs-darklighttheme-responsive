import { UserProps } from "@/@types/User";

class User implements UserProps {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  profilePictureURl: string;

  constructor(id: number, name: string, email: string, password: string, username: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.profilePictureURl = "";
  }

  updateEmail(email: string) {
    this.email = email;
  }
}

export default User;
