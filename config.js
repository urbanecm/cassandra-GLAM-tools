var MariaClient = require('mariasql');

var toollabs_user = "alessio";
var toollabs_host = "tools-dev.wmflabs.org";
var toollabs_DB_host = "itwiki.labsdb";
var toollabs_DB_port = 3306;

var DB_NAME = "ZU";
var STARTING_CAT = "Historical_images_of_buildings_in_the_canton_of_Zürich";
var mongoURL = 'mongodb://localhost:27017/' + DB_NAME;

var SSH_COMMAND = 'ssh -fN alessio@tools-dev.wmflabs.org -L 3306:itwiki.labsdb:3306';

var connectionToWMF = new MariaClient({
  host: '127.0.0.1',
  user: 'u3175',
  password: 'oolahaerohdeovei',
  db: 'commonswiki_p'
});

var SERVICE_USER = "test";
var SERVICE_PASSWORD = "WFe8g9GVt4";

exports.SSH_COMMAND = SSH_COMMAND;
exports.connectionToWMF = connectionToWMF;
exports.STARTING_CAT = STARTING_CAT;
exports.mongoURL = mongoURL;
exports.DB_NAME = DB_NAME;
exports.SERVICE_USER = SERVICE_USER;
exports.SERVICE_PASSWORD = SERVICE_PASSWORD;