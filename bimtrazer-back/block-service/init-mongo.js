// init-mongo.js
db2 = db.getSiblingDB('block-db');
db2.createCollection('blocks');
