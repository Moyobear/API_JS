const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;

// Syncing all the models at once.
conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`listening at ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
