import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"; // used to generate JWT tokens : it converts the user data into a token that can be used for authentication not in human redable format
import bcrypt from "bcrypt"; // used to hash passwords : it converts the password into a hash that can be stored in the database securely


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudinary url
      required: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },

  { timestamps: true }
);

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    
    this.password = await bcrypt.hash(this.password, 10);
    next()
})


userSchema.methods.isPasswordCorrect = async function
(password){
  return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function() {
   return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  )
}


userSchema.methods.generateRefreshToken =  function() {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  )
}


export const User = mongoose.model("User", userSchema);





























/*
.pre("save", async function(next) {} - 
             
> .pre () - methood is used for the pre-save hook, which allows you to perform actions before saving a document to the database.
> this method is exported from mongoose library - aggregated pipeline concept
> .compare () - method is used to compare a plain text password with the hashed password stored in the database.

*/