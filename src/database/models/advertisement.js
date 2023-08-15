import mongoose from "mongoose";

const advertisementSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    link: String
}, {
    timestamps: true
});

const Advertisement = mongoose.models.Advertisement || mongoose.model('Advertisement', advertisementSchema);
export default Advertisement;