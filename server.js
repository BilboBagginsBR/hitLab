const app = require("express")();
const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => res.send("App running..."));


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
