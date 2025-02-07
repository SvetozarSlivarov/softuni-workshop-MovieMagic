import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true, // This is not validator, it's index
        match: /\@[a-zA-Z]+.[a-zA-Z]+$/,
        lowercase: true,
        minLength: 10,
    },
    password: {
        type: String,
        maatch: /\w+/,
        trim: true,
        minLength: [6, 'Password should be at least 6 characters!'],
    },
});
userSchema.virtual('rePassword')
    .set(function(rePassword) {
        if(rePassword !== this.password) {
            throw new Error('Passwors missmatch!');
        }
    });

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 10);
});

const User = model('User', userSchema);

export default User;