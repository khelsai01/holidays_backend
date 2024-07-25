"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
const router = (0, express_1.Router)();
// Create a new tour
router.post('/tours', adminController_1.createTour);
// Update an existing tour
router.patch('/tours/:id', adminController_1.updateTour);
// Delete a tour
router.delete('/tours/:id', adminController_1.deleteTour);
exports.default = router;
