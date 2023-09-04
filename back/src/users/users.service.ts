import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
    
  ){}

  
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async getAllUsers() {
    return await this.userRepository.find({where:  {actif : 'actif'}});
  }

  async findOne(id: number) {
    return await this.userRepository.find({where: {id: id}});
  }

}
