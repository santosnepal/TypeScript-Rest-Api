import { omit } from 'lodash';
import { DocumentDefinition, FilterQuery } from 'mongoose';
import log from '../logger';
import User,{UserDocument} from '../Model/user.model';
export async function createuser(input:DocumentDefinition<UserDocument>){
    try {
        const user = await User.create(input);
        return  omit(user.toJSON(), "password");
    } catch ( error: any ) {
        // log.error(error);
        throw new Error(error);
        // return omit(error.toJSON(),'')
    }
}
export async function validatePassword({ email,password }:{email:string,password:string}){
    const user = await User.findOne({ email });;
    if(!user){
        return false;
    } 
    const isValid = await user.comparePassword(password);
    if(!isValid){
        return false;
    }
    return omit(user.toJSON(),'password');
};
export async function findUser(query: FilterQuery<UserDocument>) {
    return User.findOne(query).lean();
  }