import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilepath)=>{
    try {
        if(!localFilepath) return null

        //upload the file on cloudinary
        const response=await cloudinary.uploader.upload(localFilepath,{
            resource_type:'auto'
        })

        //file has been uploaded sucessfully
        console.log(response)
        console.log(response.url)
        
        console.log("FIle upload sucessful")

        fs.unlinkSync(localFilepath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilepath) //remove the locally save temporary file as the upload operation got failed
    }
}

export default uploadOnCloudinary
