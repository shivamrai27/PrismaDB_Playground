import express from 'express';
import 'dotenv/config';
const app = express();
const PORT = 3000
app.get('/', (req, res) => {
    return res.json("running")
})

app.listen(PORT, () => {
    console.log("server listening on port " + PORT);
})