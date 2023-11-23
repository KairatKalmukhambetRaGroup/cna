import mongoose from "mongoose";
// import Post from "./post";

const userVisit = mongoose.Schema({
    ip: {type: String, required: true}, 
    // postId: {type: mongoose.Schema.Types.ObjectId, ref: Post, required: true},
    timestamp: {type: Date, required: true}
});

const UserVisit = mongoose.models.UserVisit || mongoose.model('UserVisit', userVisit);
export default UserVisit;