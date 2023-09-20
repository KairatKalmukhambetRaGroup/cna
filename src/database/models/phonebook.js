import mongoose from 'mongoose';
import PhoneBookCategory from './phonebookcategory';

const phonebookSchema = mongoose.Schema({
    name: String,
    phone: String,
    whatsapp: String,
    telegram: String,
    email: String,
    address: String,
    description: String,
    category: {type: mongoose.Schema.Types.ObjectId, ref: PhoneBookCategory}
},{
    timestamps: true
});

const PhoneBook = mongoose.models.PhoneBook || mongoose.model('PhoneBook', phonebookSchema);
export default PhoneBook;