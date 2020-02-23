import mongoose from 'mongoose';

class DB {
    public mongoose = mongoose;

    constructor() {
        this.mongoose.Promise = global.Promise;
        this.mongoose.connect('mongodb://localhost:27017/ifound', {useNewUrlParser: true})
    }

}

export default new DB().mongoose;
