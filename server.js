const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");
const routes = require("./routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3306;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced.");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
