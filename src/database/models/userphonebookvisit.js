import mongoose from "mongoose";
// import Post from "./post";

const userPhonebookVisit = mongoose.Schema({
    ip: {type: String, required: true}, 
    // postId: {type: mongoose.Schema.Types.ObjectId, ref: Post, required: true},
    timestamp: {type: Date, required: true}
});

const UserPhonebookVisit = mongoose.models.UserPhonebookVisit || mongoose.model('UserPhonebookVisit', userPhonebookVisit);
export default UserPhonebookVisit;