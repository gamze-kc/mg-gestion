import { HttpException, Injectable } from '@nestjs/common';
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

  ) { }



  async getAllUsers(): Promise<UserEntity[] | Error> {
    try {
      return await this.userRepository.find({ where: { actif: 'actif' } });

    } catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la récupération des users :  ' + error.message,
        500,
      );
    }

  }

  async findOne(id: number) : Promise<UserEntity|Error>{
    try{
      
      return await this.userRepository.findOneBy({id: id});

    }catch(error){
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la récupération de l\'user depuis cet ID :  ' + error.message,
        500,
      );
    }
  }

}
