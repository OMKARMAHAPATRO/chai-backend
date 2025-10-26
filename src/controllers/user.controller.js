import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from '../utils/ApiError.js';
import { User } from "../models/user.model.js";
import { uploadCludinary, uploadToCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {


  // get user details from user
  // validation - check if user already exists {e.g - email or username}
  // cheack the user already exists
  // check if user already exists : username, email
  // check for images
  // check for avatar image
  // uplod them into clodinary , avatar
  // user (image) -> upload by multer -> cloudinary 
  // To send the image into the database [ mongoDB ] we need to create an objects .{beacuse mongoDb is an noSQL database} so,
  // create user object - create entry in db
  // remove password and refresh token field from the response
  // check for user creation
  // return responce

  const { fullName, email, username, password } = req.body
  console.log("email:", email);

  if (
    [fullName, email, username, password].some((field) =>
      field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required")
  }

  const existedUser = User.findOne({
    $or: [{ username }, { email }]
  })
  if (existedUser) {
    throw new ApiError(409, "User already exists")
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLOcalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar image is required")
  }

  const avatar = await uploadCludinary(avatarLocalPath)
  const coverImage =await uploadCludinary(coverImageLOcalPath)

  if(!avatar){
    throw new ApiError(500,"Avatar is required")
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    username: username.toLowerCase(),
  })

  const createdUser = User.findById(user._id).select(
    "-password -refreshToken "
  )
  if (!createdUser) {
    throw new ApiError(500, "something went wrong while regestetring the user")
  }
  return res.status(201).json(
    new ApiResponse(200, createdUser, "User registered successfully")
  )

})



export { registerUser };

