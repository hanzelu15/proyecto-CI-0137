const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
      title: "Proyecto CI-0137 GPI",
      description: "Este es el proyecto en trios correspondiente al curso de desarrollo web",
    },
    host: "localhost:7500",
    schemes: ["http", "https"],
    definitions:{
      CreateUser:{
      name: "Mario Carmona Pérez",
      email: "Usario@correo.com",
      password: "london12",
      phone: 70155104      
      },
      LoginUser:{
        name: "Mario Carmona Pérez",
        email: "Usario@correo.com",
      }

    }
  };
  
  const outputFile = "./swagger.json";
  const endpointsFiles = ["./index.js"];
  
  swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require("./index.js");
  });