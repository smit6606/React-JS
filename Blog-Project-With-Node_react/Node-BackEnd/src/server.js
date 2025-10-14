const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./routes/route.js"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, (error) => {
  error
    ? console.log(`Server has Crashed ${error}`)
    : console.log(`Server is running on port http://localhost:${PORT}`);
});
