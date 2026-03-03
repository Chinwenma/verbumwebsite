import { model, models, Schema } from "mongoose";

export interface Client {
  _id: string;
  name: string;
  contact: string;
  expiry: string;
  address: string;
  dept: "web" | 'networking'
  domain: string;
  projectDescription: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const clientSchema = new Schema<Client>(
  {
    name: { type: String, required: true, trim: true },
    contact: { type: String, required: true },
    expiry: { type: String, required: true },
    address: { type: String, required: true },
    domain: { type: String, required: true },
    projectDescription: { type: String, required: true },
    dept: { type: String, required: true, enum: ["web", "networking"] },
  },
  {
    timestamps: true,
  },
);

const Client = models.Client || model<Client>("Client", clientSchema);

export default Client;