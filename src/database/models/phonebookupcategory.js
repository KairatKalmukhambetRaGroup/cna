import mongoose from "mongoose";
import PhoneBookCategory from './phonebookcategory';

const phonebookupcategorySchema = mongoose.Schema({
    name: String,
    sub: [{type: mongoose.Schema.Types.ObjectId, ref: PhoneBookCategory}]
}, {
    timestamps: true 
});

const PhoneBookUpcategory = mongoose.models.PhoneBookUpcategory || mongoose.model('PhoneBookUpcategory', phonebookupcategorySchema);
export default PhoneBookUpcategory;