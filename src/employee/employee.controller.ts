import { Controller, Post, Res, Body, HttpStatus, Get, Param, NotFoundException, Put, Query, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDTO } from './dto/create-employee.dto';

/*
Controller is a class responsible for handling incoming HTTP requests 
& sending respective responses to the caller

'employee' string is used to group the related routes
*/

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  /*
  Add an employee every time we receive a Post HTTP request through the /create route
  */
  @Post('/create')
  async addEmployee(@Res() response, @Body() createEmployeeDTO: CreateEmployeeDTO) {
    const employee = await this.employeeService.addEmployee(createEmployeeDTO);
    return response.status(HttpStatus.OK).json({
      message: 'Employee has been created successfully',
      employee
    })  
  }

  @Put('update')
  async updateEmployee(@Res() response, @Query('employeeId') employeeId, @Body() createEmployeeDTO: CreateEmployeeDTO) {
    const employee = await this.employeeService.updateEmployee(employeeId, createEmployeeDTO);
    if(!employeeId) {
      throw new NotFoundException('Employee does not exist!');
    }
    return response.status(HttpStatus.OK).json({
      message: 'Employee has been successfully updated!',
      employee
    })
  }

  @Get('employees')
  async findAllEmployees(@Res() response) {
    const employees = await this.employeeService.findAllEmployees();
    return response.status(HttpStatus.OK).json(employees)
  }

  @Get('employee/:employeeId')
  async findOneEmployee(@Res() response, @Param('employeeId') employeeId) {
    const employee = await this.employeeService.findOneEmployee(employeeId);

    if(!employee) {
      throw new NotFoundException('Employee does not exist!');
    }
    return response.status(HttpStatus.OK).json(employee)
  }

  @Delete('delete')
  async deleteEmployee(@Res() response, @Query('employeeId') employeeId) {
    const employee = await this.employeeService.deleteEmployee(employeeId);
    
    if(!employee) {
      throw new NotFoundException('Employee does not exist!');
    }
    return response.status(HttpStatus.OK).json({
      message: 'Employee has been successfully deleted!',
      employee
    })
  }

}
