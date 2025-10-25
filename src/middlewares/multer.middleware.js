// Import the multer library for handling multipart/form-data, which is primarily used for file uploads
import multer from "multer";

// Configure disk storage for uploaded files with custom destination and filename settings
const storage = multer.diskStorage({
    // Define the destination directory where uploaded files will be stored
    destination: function (req, file, cb) { // --> it is a controller 
        // Callback function to specify the upload destination
        // null indicates no error, "./public/temp" is the directory path
        cb(null, "./public/temp")
    },
    // Define how uploaded files should be named
    filename: function (req, file, cb) {
        // Callback function to specify the filename
        // null indicates no error, file.originalname preserves the original filename
        cb(null, file.originalname)
    }
})

// Export a configured multer middleware instance with the defined storage settings
// This middleware can be used in routes to handle file uploads
export const upload = multer({
    storage, // Use the custom disk storage configuration defined above
})
