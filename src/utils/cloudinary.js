import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'; // this fs package of node js - work : perform file operation . e.g- read,write,..etc 


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadCludinary = async (localfilepath) => {
    try {
        if (!localfilepath) {
            throw new Error("No file path provided for upload"); // --> if the local path of the file not exist then throw an error
        }
        // upload the file on cloudinary
        const responce = await cloudinary.uploader.upload(localfilepath, { // --> else - (file exists) --> upload into cloudinary
            resource_type: "auto",
        })
        // file has been uploaded successfully
        console.log("File uploaded on cloudinary successfully", responce.url); // if the file upload successful then print the url and return it . 
        return responce; // return the URL of the uploaded file - this url can be used to access the file publicly-User.

    } catch (error) {
        fs.unlinkSync(localfilepath); // removed the locally saved temporary file as theupload opeation got failed .
        return null
    }
}

export { uploadCludinary };




