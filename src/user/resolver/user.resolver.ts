import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../service/user.service';
import { UserEntity } from '../entity/user.entity';
import { UserDto } from '../dto/user.dto';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((_) => [UserEntity])
  async getAllUser(): Promise<UserEntity[]> {
    return await this.userService.find();
  }
  @Mutation((_) => UserEntity)
  async createUser(
    @Args('createUserInput') createUserInput: UserDto,
  ): Promise<UserEntity> {
    return await this.userService.createUser(createUserInput);
  }
}
