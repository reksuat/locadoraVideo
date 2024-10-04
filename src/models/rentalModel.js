import { Schema, model } from "mongoose";

const rentalSchema = new Schema (
    {
        rentedBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }
)