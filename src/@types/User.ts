export interface UserProps {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
}

export interface IAuthenticateUser {
  execute(email: string, password: string): Promise<UserProps | null>;
}
