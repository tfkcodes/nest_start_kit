import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '../service/auth-service.service';
import { UserAuth } from '../entities/user-auth.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation((_) => UserAuth)
  async login(
    @Args('username') username: String,
    @Args('password') password: string,
  ): Promise<UserAuth> {
    return this.authService.login(username);
  }
}
