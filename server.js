const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

const dbDriver =
  "mongodb+srv://sahanabanita:ovRb9Gm1QuhlGtca@cluster0.kyzlz4u.mongodb.net/basicadmin"

const adminRouter = require("./routes/admin.routes");

app.use(adminRouter);

const port = process.env.PORT || 2050;

mongoose
  .connect(dbDriver, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port, () => {
      console.log(`Db is connected`);
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
