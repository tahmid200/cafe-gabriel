const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('hello from Tahmid');
});

app.listen(3001, () => {
    console.log('running on port 3001');
});