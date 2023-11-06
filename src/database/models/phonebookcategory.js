import mongoose from "mongoose";

const phonebookCategorySchema = mongoose.Schema({
    name: String,
}, {
    timestamps: true
});

const PhoneBookCategory = mongoose.models.PhoneBookCategory || mongoose.model('PhoneBookCategory', phonebookCategorySchema);
export default PhoneBookCategory;