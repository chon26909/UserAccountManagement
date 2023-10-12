export interface IPagination {
  total: number;
  limit: number;
  skip: number;
}

export type IUserListRequest = Pick<IPagination, "limit" | "skip">;

export interface IUserListResponse extends IPagination {
  users: IUser[];
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IHair;
  domain: string;
  ip: string;
  address: IAddress;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
}

export interface IHair {
  color: string;
  type: string;
}

export interface IAddress {
  address: string;
  city: string;
  coordinates: ICoordinates;
  postalCode: string;
  state: string;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  address: ICompanyAddress;
  department: string;
  name: string;
  title: string;
}

export interface ICompanyAddress {
  address: string;
  city: string;
  coordinates: ICoordinates;
  postalCode: string;
  state: string;
}
