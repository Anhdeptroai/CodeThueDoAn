const express = require('express');
const homeRoutes = require("./routes/home_routes");
const session = require('express-session');
const reviewRoutes = require("./routes/review_routes");
const path = require("path");
const app = express();


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "image")));


app.use("/", homeRoutes);
app.use("/", reviewRoutes);

(async () => {
  const PORT = process.env.PORT || 10000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();