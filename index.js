const app = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;
const { swaggerDocs: V1SwaggerDocs } = require("../API JS/src/v1/swagger.js");

// Syncing all the models at once.
conn
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening at ${PORT}`);
      V1SwaggerDocs(app, PORT);
    });
  })
  .catch((error) => console.log(error.message));
