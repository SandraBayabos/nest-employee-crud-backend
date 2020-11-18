
/*
Data Transfer Object schema that defines how our data will be sent over the network
*/

export class CreateEmployeeDTO {
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  readonly created_at: Date;
}