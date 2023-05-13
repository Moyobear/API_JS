const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

// *Informacion de la metadata acerca de la API
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "JS Bienes Raices API",
      description:
        "Esta API se encarga de manejar las consultas y registros de la base de datos de la empresa JS Bienes Raices.",
      contact: { email: "rodriguezjmm@hotmail.com" },
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

// *Documentos en formato JSON
const swaggerSpec = swaggerJSDoc(options);

// *Función para configurar los documentos
const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs esta disponible en http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };
