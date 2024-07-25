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
exports.addReview = exports.getTourById = exports.getTours = void 0;
const Tour_1 = __importDefault(require("../models/Tour"));
const getTours = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tours = yield Tour_1.default.find();
        res.json({ "tours": tours });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.getTours = getTours;
const getTourById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tour = yield Tour_1.default.findById(id);
        if (!tour) {
            return res.status(404).json({ message: 'Tour not found' });
        }
        res.json(tour);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.getTourById = getTourById;
const addReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { user, rating, comment } = req.body;
    try {
        const tour = yield Tour_1.default.findById(id);
        if (!tour) {
            return res.status(404).json({ message: 'Tour not found' });
        }
        const newReview = {
            user,
            rating,
            comment,
            date: new Date()
        };
        tour.reviews.push(newReview);
        yield tour.save();
        res.json({ message: 'Review added successfully', review: newReview });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.addReview = addReview;
