import express, { json } from 'express';
const app = express();
app.use(json());
// eslint-disable-next-line
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    console.log('GET Request syccessfull!');
    res.send({ message: 'Welcome to my API!' });
});
app.post('/post', (req, res) => {
    console.log('POST Request successful');
    console.log(req.body);
    res.send('Data POST Request Recieved');
});
app.put('/put', (req, res) => {
    console.log('PUT Request successful');
    console.log(req.body);
    res.send('Data Update Request Recieved');
});
app.delete('/delete', (req, res) => {
    console.log('DELETE Request Successful');
    console.log(req.body);
    res.send('Data Delete Request Recieved');
});
app.listen(port, () => {
    console.log(`start listening at: ${port}`);
    console.log(`http://127.0.0.1:${port}/`);
});
