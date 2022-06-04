const cloudinary = require('cloudinary').v2;

function upload(file){
    // Cloudinary configuration
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_cloud_name,
	api_key:process.env.CLOUDINARY_api_key,
	api_secret: process.env.CLOUDINARY_api_secret,
});

return new Promise((resolve,reject)=>{
    cloudinary.uploader.upload(file,(err,res)=>{
        if(err){
            console.log('cloudinary error')
        }
        else{
            console.log('cloudinary res')
            return resolve(res.url)
        }
    })
})


}

module.exports=upload
