"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const PORT = 3000;
app.get('/', (req, res) => {
    res.status(200).send('Express + TypeScript');
});
app.use('/user', userRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
