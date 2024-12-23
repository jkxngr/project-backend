const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");
const routes = require("./routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
app.use("/api", routes);

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced.");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error("Failed to sync database:", err);
});