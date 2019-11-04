var express = require("express");
var app = express();
const mysql = require("mysql");
const AWS = require("aws-sdk");
var port = 8000;
var bodyParser = require("body-parser");
var fs = require("fs");
//var formidable = require("formidable");
//var upload = require("express-fileupload");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(upload());
var mysqlConnection = mysql.createConnection({
  host: "database-1.cysve1v2h4jo.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "keshav123456",
  database: "cloudcsestudy"
});
var s3 = new AWS.S3({
  accessKeyId: "ASIAT6BCT6BFPVG2RAF5",
  secretAccessKey: "vjD9hAdH0Z5TXtdbMRtWhMHe1Q8z6VHZSbjAScga",
  /*if you are using educate account include this here*/
  sessionToken:
    "FQoGZXIvYXdzEDYaDFfjQ5n+F3iwdmnRNyKWAvN7LpydEilXZCfikIgMND4R1jb2y4xBzFiB32sE9qcfUqIX648kFzmTAeK6WbpswS96XmB20W3jbyzIj8vDwBOU2IzfrOs4vZV89JtjFag6d2iKrXGdpp/eRnaRdoGVMD2czr8d++VV4tbpJNatnpO5LvP/q/UIB8tNL3/DCu3U9imxWluMYS2YKRfarFepCuzCAG1O3IGBJ1TBBbXRl0HgSx3JlcQKPvz1FbumRiB5mfOJZK2xCyb5L3Qs3M/PXeIq+aJaCnRWl4UjeAKUMgNLeTfeJ0LygsbbOyRFLTo/8hXJPuixB6fwRqrB8Ra8FAwdAMB17joZH+xprG/0qISBzeJL5ym4f5b7UwnrrxwbRmm7jDtPKN351ewF"
});
let fileName = "";
var uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    var params = {
      Bucket: "keshavnikeths3", // pass your bucket name
      Key: fileName, // file will be saved as testBucket/
      Body: data
    };
    s3.upload(params, function (s3Err, data) {
      if (s3Err) throw s3Err;
      console.log("File uploaded successfully at " + data.Location);
    });
  });
};

mysqlConnection.connect(err => {
  if (!err) console.log("Connection succeeded.");
  else
    console.log("Unsuccessful \n Error : " + JSON.stringify(err, undefined, 2));
});

app.post("/wheat", function (req, res) {
  var state = req.body.state;
  var district = req.body.district;
  console.log(district);
  mysqlConnection.query("select price  as Price,state as state,district as district from wheat where state=? and district=? ", [state, district], function (err, result, fields) {
    if (!err) {

      for (let i = 0; i < result.length; i++) {
        res.write(
          "<!DOCTYPE html> <head></head> <body> <h1> Entry No : " +
          (i + 1) +
          " </h1> <h1> District: </h1> <h4>" +
          result[i].district +
          "</h4> <h1>  State : </h1> <h4>" +
          result[i].state +
          "</h4><h1>    Price : </h1><h4>" +
          result[i].Price +
          "</h4> <hr> </body>"
        );

      }
      fs.appendFile(
        "mynewfile3.txt",
        result[result.length - 1].state + " " + result[result.length - 1].district + " " + result[result.length - 1].price,
        function (err) {
          if (err) throw err;
        }
      );

      fileName = "mynewfile3.txt";
      uploadFile();

      res.end();
    } else {
      console.log(err);
      res.end();
    }
  });
});

app.post("/cauliflower", function (req, res) {
  var state = req.body.state;
  var district = req.body.district;
  console.log(district);
  mysqlConnection.query("select modal_price  as Price,state as state,district as district from cauliflower where state=? and district=? ", [state, district], function (err, result, fields) {
    if (!err) {

      for (let i = 0; i < result.length; i++) {
        res.write(
          "<!DOCTYPE html> <head></head> <body> <h1> Entry No : " +
          (i + 1) +
          " </h1> <h1> District: </h1> <h4>" +
          result[i].district +
          "</h4> <h1>  State : </h1> <h4>" +
          result[i].state +
          "</h4><h1>   Price : </h1><h4>" +
          result[i].Price +
          "</h4> <hr> </body>"
        );

      }
      fs.appendFile(
        "mynewfile3.txt",
        result[result.length - 1].state + " " + result[result.length - 1].district + " " + result[result.length - 1].modal_price,
        function (err) {
          if (err) throw err;
        }
      );

      fileName = "mynewfile3.txt";
      uploadFile();

      res.end();
    } else {
      console.log(err);
      res.end();
    }
  });
});

app.post("/cowghee", function (req, res) {
  var state = req.body.state;
  var district = req.body.district;
  console.log(district);
  mysqlConnection.query("select modal_price  as Price,state as state,district as district from gheenew where state=? and district=? ", [state, district], function (err, result, fields) {
    if (!err) {

      for (let i = 0; i < result.length; i++) {
        res.write(
          "<!DOCTYPE html> <head></head> <body> <h1> Entry No : " +
          (i + 1) +
          " </h1> <h1> District: </h1> <h4>" +
          result[i].district +
          "</h4> <h1>  State : </h1> <h4>" +
          result[i].state +
          "</h4><h1>   Price : </h1><h4>" +
          result[i].Price +
          "</h4> <hr> </body>"
        );

      }
      fs.appendFile(
        "mynewfile3.txt",
        result[result.length - 1].state + " " + result[result.length - 1].district + " " + result[result.length - 1].modal_price,
        function (err) {
          if (err) throw err;
        }
      );

      fileName = "mynewfile3.txt";
      uploadFile();

      res.end();
    } else {
      console.log(err);
      res.end();
    }
  });
});

app.post("/rice", function (req, res) {
  var state = req.body.state;
  var district = req.body.district;
  console.log(district);
  mysqlConnection.query("select modal_price  as Price,state as state,district as district from Rice_2019 where state=? and district=? ", [state, district], function (err, result, fields) {
    if (!err) {

      for (let i = 0; i < result.length; i++) {
        res.write(
          "<!DOCTYPE html> <head></head> <body> <h1> Entry No : " +
          (i + 1) +
          " </h1> <h1> District: </h1> <h4>" +
          result[i].district +
          "</h4> <h1>  State : </h1> <h4>" +
          result[i].state +
          "</h4><h1>   Price : </h1><h4>" +
          result[i].Price +
          "</h4> <hr> </body>"
        );

      }
      fs.appendFile(
        "mynewfile3.txt",
        result[result.length - 1].state + " " + result[result.length - 1].district + " " + result[result.length - 1].modal_price,
        function (err) {
          if (err) throw err;
        }
      );

      fileName = "mynewfile3.txt";
      uploadFile();

      res.end();
    } else {
      console.log(err);
      res.end();
    }
  });
});

app.post("/greenpeas", function (req, res) {
  var state = req.body.state;
  var district = req.body.district;
  console.log(district);
  mysqlConnection.query("select modal_price  as Price,state as state,district as district from greenpeas where state=? and district=? ", [state, district], function (err, result, fields) {
    if (!err) {

      for (let i = 0; i < result.length; i++) {
        res.write(
          "<!DOCTYPE html> <head></head> <body> <h1> Entry No : " +
          (i + 1) +
          " </h1> <h1> District: </h1> <h4>" +
          result[i].district +
          "</h4> <h1>  State : </h1> <h4>" +
          result[i].state +
          "</h4><h1>   Price : </h1><h4>" +
          result[i].Price +
          "</h4> <hr> </body>"
        );

      }
      fs.appendFile(
        "mynewfile3.txt",
        result[result.length - 1].state + " " + result[result.length - 1].district + " " + result[result.length - 1].modal_price,
        function (err) {
          if (err) throw err;
        }
      );

      fileName = "mynewfile3.txt";
      uploadFile();

      res.end();
    } else {
      console.log(err);
      res.end();
    }
  });
});

app.post("/cauliflower", function (req, res) {
  var state = req.body.state;
  var district = req.body.district;
  console.log(district);
  mysqlConnection.query("select modal_price  as Price,state as state,district as district from cauliflower where state=? and district=? ", [state, district], function (err, result, fields) {
    if (!err) {

      for (let i = 0; i < result.length; i++) {
        res.write(
          "<!DOCTYPE html> <head></head> <body> <h1> Entry No : " +
          (i + 1) +
          " </h1> <h1> District: </h1> <h4>" +
          result[i].district +
          "</h4> <h1>  State : </h1> <h4>" +
          result[i].state +
          "</h4><h1>   Price : </h1><h4>" +
          result[i].Price +
          "</h4> <hr> </body>"
        );

      }
      fs.appendFile(
        "mynewfile3.txt",
        result[result.length - 1].state + " " + result[result.length - 1].district + " " + result[result.length - 1].modal_price,
        function (err) {
          if (err) throw err;
        }
      );

      fileName = "mynewfile3.txt";
      uploadFile();

      res.end();
    } else {
      console.log(err);
      res.end();
    }
  });
});

app.post("/saunf", function (req, res) {
  var state = req.body.state;
  var district = req.body.district;
  console.log(district);
  mysqlConnection.query("select modal_price  as Price,state as state,district as district from soanf where state=? and district=? ", [state, district], function (err, result, fields) {
    if (!err) {

      for (let i = 0; i < result.length; i++) {
        res.write(
          "<!DOCTYPE html> <head></head> <body> <h1> Entry No : " +
          (i + 1) +
          " </h1> <h1> District: </h1> <h4>" +
          result[i].district +
          "</h4> <h1>  State : </h1> <h4>" +
          result[i].state +
          "</h4><h1>   Price : </h1><h4>" +
          result[i].Price +
          "</h4> <hr> </body>"
        );

      }
      fs.appendFile(
        "mynewfile3.txt",
        result[result.length - 1].state + " " + result[result.length - 1].district + " " + result[result.length - 1].modal_price,
        function (err) {
          if (err) throw err;
        }
      );

      fileName = "mynewfile3.txt";
      uploadFile();

      res.end();
    } else {
      console.log(err);
      res.end();
    }
  });
});


/*app.post("/login", function(req, res) {
  console.log("Inside post /login method");

  var price= req.priv;
  var location = req.body.house_name;
  var zip = req.body.zip;
  var filename = req.body.document;
  fileName = filename;
  uploadFile();
  console.log(filename);
  mysqlConnection.query(
    "insert into p2_1(house_no,house_name,zip) values(?,?,?)",
    [house_no, house_name, zip],
    function(err, result, fields) {
      if (err) throw err;
     console.log(house_no + " " + house_name + " " + zip);
    }
  );

  mysqlConnection.query(
    "insert into ship(zip,city) values(?,?)",
    [zip,zipcodes.lookup(zip)],
    function(err, result, fields) {
      if (err) throw err;
     console.log(zip + " " + zipcodes.lookup(zip));
    }
  );

  res.send(
    "POST request to the homepage" + " " + house_no + " " + house_name + " " + zip
  );
  /* new formidable.IncomingForm()
    .parse(req)
    .on("fileBegin", (name, file) => {
      file.path = __dirname + "/uploads/" + name;
      console.log(file.path);
    })
    .on("file", (name, file) => {
      console.log("Uploaded file", name, file);
    });*/
app.listen(port, () => console.log("Example app listening on  port!")); 