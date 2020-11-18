import { Module } from '@nestjs/common';
import { EmployeeModel } from './schemas/employee.schema'
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';

/*
@Module() decorator provides metadata that Nest makes use of to organize the application structure
*/

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeModel}])
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
