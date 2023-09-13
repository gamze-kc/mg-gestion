import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('APIs concernants la gestion des utilisateurs')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  
  
@ApiOperation({summary: 'Api retournant la liste des utilisateurs'})
@ApiResponse({
    status: 201, 
    description : 'Utilisateurs renvoyés'
})
@ApiResponse({
    status: 400, 
    description : 'Requète incorrecte'
})
@Get()
getAllUsers() {
    return this.usersService.getAllUsers();
}



@ApiOperation({summary: 'Api retournant un utilisateur depuis son ID'})
@ApiResponse({
    status: 201, 
    description : 'Utilisateur renvoyé'
})
@ApiResponse({
    status: 400, 
    description : 'Requète incorrecte'
})
@ApiParam({
  name : 'idUser',
  description : 'Id de l\'utilisateur',
  example : 1
})
  @Get(':id')
  findOne(@Param('idUser') id: number) {
    return this.usersService.findOne(id);
  }

}
