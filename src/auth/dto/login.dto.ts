import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginUserDto {
  @Field()
  readonly identifier: string;

  @Field()
  readonly password: string;
}
