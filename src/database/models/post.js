import mongoose from "mongoose";
import Region from "./region";
import Housing from "./housing";
import City from "./city";

const postSchema = mongoose.Schema({
    housing: {type: mongoose.Schema.Types.ObjectId, ref: Housing, required: true},
    city: {type: mongoose.Schema.Types.ObjectId, ref: City, required: true},
    region: {type: mongoose.Schema.Types.ObjectId, ref: Region},

    images: [String],

    realtor: {
        name: String,
        phone: String
    },

    rooms: {type: Number, required: true},
    price: {type: Number, required: true},
    adress: {type: String, required: true},
    description: String,
    material: String,
    year: String,
    floor: Number,
    floors: Number,
    state: String,
    roofing: String,
    sewerage: String,
    fencing: String,
    electricity: String,
    heating: String,
    gas: String,
    water: String,
    plot: String,
    area: {
        total: String,
        kitchen: String,
        living: String
    },
    bathroom: String,
    balcony: {
        value: String,
        glazed: Boolean
    },
    telephone: String,
    internet: String,
    furnished: String,
    commercial: {
        purpose: String,
        placement: String,
    },

    posttype: String,
    rentPeriod: String,
},{
    timestamps: true
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;