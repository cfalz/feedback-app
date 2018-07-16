const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

const POST = process.env.PORT || 8000;
app.listen(8000);



