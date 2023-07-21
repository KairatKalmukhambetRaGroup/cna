import mongoose from "mongoose";

const housingSchema = mongoose.Schema({
    slug: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
}, {
    timestamps: true
});

const Housing = mongoose.models.Housing || mongoose.model('Housing', housingSchema);
export default Housing;