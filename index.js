const express = require('express');
const homeRoutes = require("./routes/home_routes");
const reviewRoutes = require("./routes/review_routes");
const articleRoutes = require("./routes/article_routes");
const path = require("path");
const app = express();


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "image")));


app.use("/", homeRoutes);
app.use("/", reviewRoutes);
app.use("/", articleRoutes);

(async () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();