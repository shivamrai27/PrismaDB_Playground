import express, { urlencoded } from 'express';
import 'dotenv/config';
const app = express();
const PORT = 3000

// * Miidleware
app.use(express.json());
app.use(urlencoded({ extended: false }))


// * Routes File
import routes from './Routes/index.js'
app.use(routes);


app.listen(PORT, () => {
    console.log("server listening on port " + PORT);
})