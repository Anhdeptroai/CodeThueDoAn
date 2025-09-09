const express = require('express');
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth_routes");
const homeRoutes = require("./routes/home_routes");

const app = express();

// setup
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// routes auth
app.use("/", authRoutes);
app.use("/", homeRoutes);

(async () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();