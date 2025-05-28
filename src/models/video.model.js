import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String, // cloudinary url
            required: true,    
        },
        thumbnail: {
            type: String, // cloudinary url
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number, // duration in seconds
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true, // public by default
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User", // reference to User model
        }
    },
    {timestamps: true});



videoSchema.plugin(mongooseAggregatePaginate);


export const Video = mongoose.model("Video", videoSchema);