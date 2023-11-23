import mongoose from "mongoose";
import Post from "./post";

const userPostVisit = mongoose.Schema({
    ip: {type: String, required: true}, 
    postId: {type: mongoose.Schema.Types.ObjectId, ref: Post, required: true},
    timestamp: {type: Date, required: true}
});

const UserPostVisit = mongoose.models.UserPostVisit || mongoose.model('UserPostVisit', userPostVisit);
export default UserPostVisit;