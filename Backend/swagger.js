const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
      title: "Proyecto CI-0137 GPI",
      description: "Este es el proyecto en trios correspondiente al curso de desarrollo web",
    },
    host: "localhost:3000",
    schemes: ["http", "https"],
  };
  
  const outputFile = "./swagger.json";
  const endpointsFiles = ["./index.js"];
  
  swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require("./index.js");
  });