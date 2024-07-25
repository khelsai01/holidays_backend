"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const ItinerarySchema = new mongoose_1.Schema({
    day: { type: Number, required: true },
    title: { type: String, required: true },
    details: { type: String, required: true }
});
const HotelDetailSchema = new mongoose_1.Schema({
    city: { type: String, required: true },
    deluxe: {
        pricePerPerson: { type: Number, required: true }
    },
    premium: {
        pricePerPerson: { type: Number, required: true }
    }
});
const ReviewSchema = new mongoose_1.Schema({
    user: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
const TourSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    itinerary: [ItinerarySchema],
    images: [{ type: String, required: true }],
    hotelDetails: [HotelDetailSchema],
    exclusions: [{ type: String, required: true }],
    inclusions: [{ type: String, required: true }],
    price: { type: Number, required: true },
    reviews: [ReviewSchema]
}, {
    versionKey: false
});
exports.default = mongoose_1.default.model('Tour', TourSchema);
