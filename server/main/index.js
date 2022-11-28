import express from 'express';
import path, { resolve } from 'path';
import { HOST, PORT } from '../options.js';
import main from '../route/main.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
app.use(
    express.urlencoded({
      extended: true,
    })
);
app.use(express.json())

app.set('views', path.join(__dirname, '../', 'views'));
app.set('view engine', 'pug');

app.use('/v1', main)

app.listen(PORT, HOST, function() {
    console.log(`Server started on port ${PORT}`);
});