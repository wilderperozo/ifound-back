import {Document, Schema} from 'mongoose';
import mongoose from './db';

export interface IPost extends Document {
    title: string;
    description: string
    author: any;
}

const PostSchema = new Schema<IPost>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default mongoose.model<IPost>('post', PostSchema);
