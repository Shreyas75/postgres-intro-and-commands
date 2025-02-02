"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});
function insertData(username, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect(); // Ensure client connection is established
        const query = 'INSERT INTO users2 (username, password, email) VALUES ($1, $2, $3)';
        const values = [username, password, email];
        const result = yield client.query(query, values);
        console.log(result);
    });
}
insertData('user5@example.com', "user5pass", "user5@someone.com");
