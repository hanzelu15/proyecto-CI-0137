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
      },
      CreateProject:{
        name: "Escazu URBANO",
        location: "Escazu",
        description:"proyecto inmobiliario que consta de tres fases de 20 unidades cada una"
      },
      CreatePhase:{
        name: "interseccion A",
        location: "Sur",
        description:"Fase que consta de 20 casas"
      },
      CreateUnit:{
        name: "Kylian Mbappe",
        number: "J-25",
        description:"Casa de dos plantas",
        finished: true,
        delivered: false
      },
    }
  };
  
  const outputFile = "./swagger.json";
  const endpointsFiles = ["./index.js"];
  
  swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require("./index.js");
  });