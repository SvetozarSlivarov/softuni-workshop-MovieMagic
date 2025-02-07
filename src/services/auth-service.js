import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'BASICSECRET';

export default {
    async register(userData) {
        if (userData.password !== userData.rePassword){
            throw new Error('Password missmatch!');
        };
        
        
        
        const count = await User.countDocuments({email: userData.email});
        if(count>0){
            throw Error('Email already exists!');
        }
        return User.create(userData);
    },
    async login(email, password){
         //Check user exists
        const user = await User.findOne({ email});
        if(!user){
            throw new Error('Invalid email!');
        }

         //Check password is correct
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid){
            throw new Error('Invalid password!');
        }
         //Generate token
        const payload = {
            id: user._id,
            email: user.email, 
        }
        
        const token = jwt.sign(payload, SECRET, {expiresIn: '2h'})


         //return token
        
        return token;
    }
};