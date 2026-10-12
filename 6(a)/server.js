const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Hello World');
});
app.listen(786, () => {
console.log('Server Running on Port 786');
});