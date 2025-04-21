import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide your first name"],
        trim: true,
        maxLength: [30, "First name cannot exceed 30 characters"],
    },
    lastName: {
        type: String,
        required: [true, "Please provide your last name"],
        trim: true,
        maxLength: [30, "Last name cannot exceed 30 characters"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    phone: {
        type: String,
        required: [true, "Please provide your phone number"],
        validate: [validator.isMobilePhone, "Please provide a valid phone number"],
    },
    date: {
        type: Date,
        required: [true, "Please provide the reservation date"],
    },
    time: {
        type: String,
        required: [true, "Please provide the reservation time"],
    },
}) 


export const Reservation = mongoose.model("Reservation", reservationSchema);

