var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');
var mongoose = require("mongoose");
var checkJwt = require('./server/middlewares/auth');
var cors = require('cors');

const corsOptions =  {
  origin: 'http://localhost:4200'
};

var distDir = __dirname + "/dist/";

app.use(cors(corsOptions));
app.use(express.static(distDir));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database Connection
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/profile", { useNewUrlParser: true }, function(err, suc) {
  if(err) {
    console.log("Cannot connect to the database");
    console.log(err);
  } else {
    console.log("Successfully connected to the database");
  }
});

//Routes
app.use('/api/proxy', checkJwt, require('./server/routes/proxyRoute'));
app.use('/api/user', checkJwt, require('./server/routes/userRoute'))
app.use("/api/profile", require("./server/routes/profileRoute"));
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

//Start up Server
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
