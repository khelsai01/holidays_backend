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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
// Load environmen
dotenv_1.default.config();
const app = (0, express_1.default)();
const mongoURI = process.env.MONGO_URI;
mongoose_1.default.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected<---->'))
    .catch(err => console.error(err));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Welcome to the Holidays backend api');
}));
app.use('/api/admin', adminRoutes_1.default);
app.use('/api', userRoutes_1.default);
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
