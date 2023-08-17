import mongoose from "mongoose";

const citySchema = mongoose.Schema({
    name: String,
},{
    timestamps: true
});

const City = mongoose.models.City || mongoose.model('City', citySchema);
export default City;