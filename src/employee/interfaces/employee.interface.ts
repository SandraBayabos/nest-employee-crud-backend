import { Document } from 'mongoose';

/*
Interface is used for type-checking of the data received by the application
*/

export interface Employee extends Document {
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  readonly created_at: Date;
}