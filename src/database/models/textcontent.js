import mongoose from "mongoose";

const textSchema = mongoose.Schema({
    slag: {type: String, unique: true, required: true},
    content: String
}, {
    timestamps: true
});

const TextContent = mongoose.models.TextContent || mongoose.model('TextContent', textSchema);
export default TextContent;