import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    phone: String,
}, {
    timestamps: true
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;