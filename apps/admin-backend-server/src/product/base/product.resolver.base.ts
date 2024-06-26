/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Product } from "./Product";
import { ProductCountArgs } from "./ProductCountArgs";
import { ProductFindManyArgs } from "./ProductFindManyArgs";
import { ProductFindUniqueArgs } from "./ProductFindUniqueArgs";
import { DeleteProductArgs } from "./DeleteProductArgs";
import { ProductService } from "../product.service";
@graphql.Resolver(() => Product)
export class ProductResolverBase {
  constructor(protected readonly service: ProductService) {}

  async _productsMeta(
    @graphql.Args() args: ProductCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Product])
  async products(
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    return this.service.products(args);
  }

  @graphql.Query(() => Product, { nullable: true })
  async product(
    @graphql.Args() args: ProductFindUniqueArgs
  ): Promise<Product | null> {
    const result = await this.service.product(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Product)
  async deleteProduct(
    @graphql.Args() args: DeleteProductArgs
  ): Promise<Product | null> {
    try {
      return await this.service.deleteProduct(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
