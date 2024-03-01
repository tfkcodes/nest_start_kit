import { Field, InputType } from "@nestjs/graphql"
@InputType()
export class UserDto {
    @Field()
    name:string
    @Field()
    phone:string
}