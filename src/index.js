const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.listen(port, () => {
    console.log('server started in the port ', port)
});
