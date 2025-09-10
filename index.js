const express = require('express');
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth_routes");
const homeRoutes = require("./routes/home_routes");
const dashboardRoutes = require("./routes/dashboard_routes");
const progressRoutes = require("./routes/progress_routes");
const session = require('express-session'); 
const reviewRoutes = require("./routes/review_routes");

const app = express();

// setup
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// Cấu hình session
app.use(session({
    secret: 'secret-key-dta', // khóa bí mật
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 } // 1 giờ
}));

app.use("/", authRoutes);
app.use("/", homeRoutes);
app.use("/", dashboardRoutes);
app.use("/", progressRoutes);
app.use("/", reviewRoutes);

(async () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();