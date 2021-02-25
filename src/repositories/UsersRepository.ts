import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";



@EntityRepository(User)
class UsersRepositoy extends Repository<User> { }




export { UsersRepositoy }