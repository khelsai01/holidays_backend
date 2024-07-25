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
exports.deleteTour = exports.updateTour = exports.createTour = void 0;
const Tour_1 = __importDefault(require("../models/Tour"));
const createTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, itinerary, images, hotelDetails, exclusions, inclusions, price } = req.body;
    try {
        const newTour = new Tour_1.default({ title, itinerary, images, hotelDetails, exclusions, inclusions, price });
        yield newTour.save();
        res.status(201).json(newTour);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.createTour = createTour;
const updateTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedTour = yield Tour_1.default.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedTour) {
            return res.status(404).json({ message: 'Tour not found' });
        }
        res.json(updatedTour);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.updateTour = updateTour;
const deleteTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedTour = yield Tour_1.default.findByIdAndDelete(id);
        if (!deletedTour) {
            return res.status(404).json({ message: 'Tour not found' });
        }
        res.json({ message: 'Tour deleted successfully' });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.deleteTour = deleteTour;
