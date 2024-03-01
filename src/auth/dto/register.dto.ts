import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterUserDto {
  @Field()
  readonly identifier: string;

  @Field()
  readonly password: string;

  @Field()
  name: string;
}
