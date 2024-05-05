import axios from "axios"; 
import { IAuthenticateUser, UserProps } from "@/@types/User";
import User from "@/entities/User";

export class AuthAPIAdapter implements IAuthenticateUser {
  async execute(email: string, password: string): Promise<UserProps | null> {
    try{
      if(email == null || password == null) return null;
      
      const response = await axios.post("http://localhost:3333/auth", {
        email,
        password
      });
  
      if(response.status !== 200) return null;

      return new User (
        response.data.user.id, 
        response.data.user.name,
        response.data.user.email,
        response.data.user.username,
        response.data.user.password,	
      );

    } catch(err){
      console.log(err);
      return null;
    }
  }
}