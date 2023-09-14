import express from "express";

const app = express();
app.use(express.json())

const port = 3001;

app.listen(port, () => {
    console.log(`server listening http://localhost:${port}`)
})