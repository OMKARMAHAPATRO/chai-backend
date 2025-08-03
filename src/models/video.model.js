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



videoSchema.plugin(mongooseAggregatePaginate); // Add pagination plugin : This allows us to paginate results in aggregate queries
// Aggregate queries are powerful for filtering, grouping, and transforming data in MongoDB.
// This plugin adds a .aggregatePaginate() method to your model, allowing you to fetch results in pages (e.g., 10 per page), which is useful for large datasets and APIs.


export const Video = mongoose.model("Video", videoSchema);