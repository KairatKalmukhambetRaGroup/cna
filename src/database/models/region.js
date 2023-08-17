import mongoose from "mongoose";
import City from "./city";

const regionSchema = mongoose.Schema({
    short: {type: String, required: true},
    city: {type: mongoose.Schema.Types.ObjectId, ref: City},
    name: {type: String, required: true}
}, {
    timestamps: true
});
const Region = mongoose.models.Region || mongoose.model('Region', regionSchema);
export default Region;