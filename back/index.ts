import "reflect-metadata";
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./database/entity/User";

createConnection().then(connection => {
    // here you can start to work with your entities
    console.log('connected')
}).catch(error => console.log(error));
