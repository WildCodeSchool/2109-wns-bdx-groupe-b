"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)().then(function (connection) {
    // here you can start to work with your entities
    console.log('connected');
}).catch(function (error) { return console.log(error); });
//# sourceMappingURL=index.js.map