export interface IUser {
  id: string;
  _id: string;
  name: string;
  isPublicMessage: boolean;
  message: string;
  __v: number;
  createdAt: string;
  arrive?: string;
  updatedAt: string;
  guestBy?: "GROM" | "BRIDE";
}