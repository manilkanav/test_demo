const express = require('express');
const app = express();
const port = 8081;


app.get('/', (req, res) => {
    res.send('Test app');
})

app.get('/hello', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
})

app.get('/hello/sayHi', (req, res) => {
    res.send("Heyy");
})