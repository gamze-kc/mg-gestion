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
async getAllUsers() {
    return await this.usersService.getAllUsers();
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
  type : 'number',
  example : 1,
  description : 'Id de l\'utilisateur'
})
  @Get(':idUser')
  async findOne(@Param('idUser') id: number) {

    console.log(id);
    return this.usersService.findOne(+id);
  }

}
