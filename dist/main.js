import express from 'express';
const app = express();
// eslint-disable-next-line
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    console.log('GET Request syccessfull!');
    res.send('GET Req successfully init');
});
app.post('/', (req, res) => {
    console.log('POST Request successful');
    console.log(req.body);
    res.send('Data POST Request Recieved');
});
app.listen(port, () => {
    console.log(`start listening at: ${port}`);
    console.log(`http://127.0.0.1:${port}/`);
});
