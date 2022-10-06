
const express = require('express')
const app = express();
const PORT = 3500;


app.use(express.json());


app.listen(PORT, () => {
    console.log(`server is runnig on port ${PORT}`)
})