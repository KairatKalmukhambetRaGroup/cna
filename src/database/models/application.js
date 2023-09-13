import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
    name: String,
    phone: String,
    archive: {type: Boolean, default: false}
},{
    timestamps: true
});

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);
export default Application;