import express from "express";
import userRoute from './routes/user.route';

const app = express();
const port = 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// @ts-ignore
app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.use('/user', userRoute);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log('server started in the port ', port)
});
