"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3333;
// Use CORS middleware
app.use((0, cors_1.default)());
app.use((0, cors_1.default)({
    origin: 'http://localhost:8080', // Frontend URL
}));
app.use(express_1.default.static(path_1.default.join(__dirname, '../../dist')));
app.use(body_parser_1.default.json());
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    console.log(`username::${username}`);
    console.log(`email::${email}`);
    //save data into the db here
    // test
    res.json({ message: `Registration successful with username::${username}, email::${email}!` });
});
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../public/index.html'));
});
app.listen(port, () => {
    console.log(`server is running at url:: http://localhost:${port}`);
});
