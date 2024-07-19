"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3333;
app.use(express_1.default.static(path_1.default.join(__dirname, '../../dist')));
app.use(body_parser_1.default.json());
app.post('/register', (req, res) => {
    const { username, email } = req.body;
    console.log(`username::${username}`);
    console.log(`email::${email}`);
    //save data into the db here
    // test
    res.send(`Registered username::${username}, email::${email}`);
});
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../index.html'));
});
app.listen(port, () => {
    console.log(`server is running at url:: http://localhost:${port}`);
});
