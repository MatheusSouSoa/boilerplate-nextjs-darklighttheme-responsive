import { IAuthenticateUser, UserProps } from "@/@types/User";
import { AuthAPIAdapter } from "@/adapters/Auth/AuthAPIAdapter";

class AuthenticateUser implements IAuthenticateUser {
  private authAdapter: AuthAPIAdapter;

  constructor(authAdapter: AuthAPIAdapter) {
    this.authAdapter = authAdapter;
  }

  async execute(email: string, password: string): Promise<UserProps | null> {
    return await this.authAdapter.execute(email, password);
  }
}

export default AuthenticateUser;