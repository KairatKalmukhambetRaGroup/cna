import mongoose from "mongoose";
import Housing from "./housing";

const regionSchema = mongoose.Schema({
    short: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    housings: [{type: mongoose.Schema.Types.ObjectId, ref: Housing}]
}, {
    timestamps: true
});

const Region = mongoose.models.Region || mongoose.model('Region', regionSchema);
export default Region;