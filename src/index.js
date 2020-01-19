import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.get('/', (req, res) => res.send('Hello world'));

app.listen(3333, console.log('Server running...'));
