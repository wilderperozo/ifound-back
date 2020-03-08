import express from "express";
import cors from 'cors';
import userRoute from './routes/user.route';
import postRoute from './routes/post.route';
import authRoute from './routes/auth.route.js';


const app = express();
const port = 9000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// @ts-ignore
app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/auth', authRoute);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log('server started in the port ', port)
});
