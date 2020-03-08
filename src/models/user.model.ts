import {Document, Schema} from 'mongoose';
import mongoose from './db';
import crypto from "crypto-js";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    toHash: any;
    validatePassword: any;
}

const UserSchema = new Schema<IUser>({
    email: {
        type: String, required: true, unique: true
    },
    firstName: {
        type: String, required: true
    },
    lastName: {
        type: String, required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.methods.toHash = ((password: string, callback: any) => {
    callback(crypto.SHA256(password, process.env.MY_HASH).toString())
})

UserSchema.methods.validatePassword = function (password: string, callback: any) {
        callback(this.password === crypto.SHA256(password, process.env.MY_HASH).toString())
    };

export default mongoose.model<IUser>('User', UserSchema);
