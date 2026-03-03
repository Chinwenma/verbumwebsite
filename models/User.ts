import { Schema, model, models } from "mongoose";
export type Role =
  | "admin"
  | "accountant"
  | "networking"
  | "web"
  | "cafe"
  | "instructor";
export type Status = "active" | "disabled";
export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  status: Status;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    role: {
      type: String,
      enum: ["admin", "accountant", "networking", "web", "cafe", "instructor"],
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "disabled"],
      default: "active",
    },
    image: { type: String },
  },
  { timestamps: true },
);

export const User = models.User || model<IUser>("User", userSchema);
