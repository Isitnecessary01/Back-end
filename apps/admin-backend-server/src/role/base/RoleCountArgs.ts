/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoleWhereInput } from "./RoleWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RoleCountArgs {
  @ApiProperty({
    required: false,
    type: () => RoleWhereInput,
  })
  @Field(() => RoleWhereInput, { nullable: true })
  @Type(() => RoleWhereInput)
  where?: RoleWhereInput;
}

export { RoleCountArgs as RoleCountArgs };