export interface ILoginRequest {
  username: string;
  password: string;
}

export type ILoginResponse = Pick<IProfile, "token">;

export interface IProfile {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
