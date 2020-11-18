import * as mongoose from 'mongoose';

/*
A Mongoose 'schema' is a document data structure (or shape of the document) 
that is enforced via the application layer
*/

export const EmployeeModel = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  address: String,
  created_at: { type: Date, default: Date.now }
})