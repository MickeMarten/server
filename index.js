import app from "./src/app.js";

const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log('Life is the Emperors currency. Spend it well. ')
})