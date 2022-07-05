
const { v4: uuidv4 } = require('uuid');
const express = require("express");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { dbConnection } = require("./database/config");
const cors = require("cors");
const path = require('path')
require("dotenv").config();

aws.config.update({
  accessKeyId: process.env.AWS_KEY_ID,
  secretAccessKey: process.env.AWS_KEY_SECRET,
  region: "us-east-1",
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "ci0137",
    key: function (req, file, cb) {
      cb(null, `gpi/${path.basename(file.originalname,path.extname(file.originalname)) +"-"+ uuidv4() + path.extname(file.originalname)}`);
    },
  }),
});
const server = express();
server.use(express.json());

dbConnection();

server.listen(process.env.PORT);
server.use(cors());
//rutas
server.use("/api/auth", require("./routes/auth"));
server.use("/api/projects", require("./routes/projects"));
server.use("/api/phases", require("./routes/phases"));
server.use("/api/user", require("./routes/users"));
const uploadMultiple = upload.fields([{ name: "file", maxCount: 5 }]);
server.post("/upload", uploadMultiple, function (req, res) {
  const files = req.files.file;

  res.send({
    message: "Uploaded!",
    files: files.map((file) => {
      return {
        url: file.location,
        name: file.key,
        type: file.mimetype,
        size: file.size,
      };
    }),
  });
});

server.use(express.static("public"));
console.log(`The server is running at http://localhost: ${process.env.PORT}`);
