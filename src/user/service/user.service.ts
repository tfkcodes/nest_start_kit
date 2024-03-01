import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userServiceRepository: Repository<UserEntity>,
  ) {}

  async createUser(data: UserDto): Promise<UserEntity> {
    const newUser = this.userServiceRepository.create(data);
    return await this.userServiceRepository.save(newUser);
  }

  async find(): Promise<UserEntity[]> {
    return this.userServiceRepository.find();
  }
}
