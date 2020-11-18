import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './interfaces/employee.interface';
import { CreateEmployeeDTO } from './dto/create-employee.dto'

/*
Service class is responsible for the retrieval and storage of the data that will be
used by the controller
*/

@Injectable()
export class EmployeeService {
  constructor(@InjectModel('Employee') private readonly employeeModel: Model<Employee>) {}

  async addEmployee(createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
    const employee = await this.employeeModel(createEmployeeDTO);
    return employee.save();
  }

  async findAllEmployees(): Promise<Employee> {
    const employees = await this.employeeModel.find().exec();
    return employees
  }

  async findOneEmployee(employeeId): Promise<Employee> {
    const employee = await this.employeeModel.findById(employeeId);
    return employee;
  }

  async updateEmployee(employeeId, createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
    const updatedEmployee = await this.employeeModel.findByIdAndUpdate(employeeId, createEmployeeDTO, { new: true });
    return updatedEmployee;
  }

  async deleteEmployee(employeeId): Promise<any> {
    const deletedEmployee = await this.employeeModel.findByIdAndRemove(employeeId);
    return deletedEmployee;
  }
}
