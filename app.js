const express = require('express')

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello From Node On Docker! from Github Actions');
});

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});