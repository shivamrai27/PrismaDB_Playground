import express from 'express';
import process from 'dotenv'
const app = express();

app.use('/', (req, res) => {
    res.json("running")
})

app.listen(process.env.PORT, () => {
    console.log("server listening on port " + process.env.PORT);
})