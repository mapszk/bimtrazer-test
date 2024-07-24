// init-mongo.js

db1 = db.getSiblingDB("api-db");
db1.createCollection("tokens");

db2 = db.getSiblingDB("block-db");
db2.createCollection("blocks");
