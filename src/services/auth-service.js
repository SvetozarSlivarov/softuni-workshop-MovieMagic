import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'BASICSECRET';

export default {
    register(userData) {
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