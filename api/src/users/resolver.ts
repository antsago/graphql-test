import { Resolver, Query, Arg, Mutation } from "type-graphql"
import { User, UserInput } from "./types"
import UserResolver from "./repository"

@Resolver()
export default class UsersResolver {
  constructor(private resolver: UserResolver = new UserResolver()) {}

  @Query(() => User)
  async user(@Arg("id") id: string): Promise<User> {
    return this.resolver.getUser(id)
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.resolver.getUsers()
  }

  @Mutation(() => User)
  async createUser(@Arg("user") user: UserInput): Promise<User> {
    return this.resolver.createUser(user)
  }

  @Mutation(() => User)
  async updateUser(
    @Arg("id") id: string,
    @Arg("user") user: UserInput,
  ): Promise<User> {
    return this.resolver.updateUser(id, user)
  }

  @Mutation(() => User)
  async deleteUser(@Arg("id") id: string): Promise<User> {
    return this.resolver.deleteUser(id)
  }
}
