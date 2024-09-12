const multer=require('multer')
var path = require('path');
const fs=require('fs');


const storage = multer.diskStorage({
    destination:async function (req, file, cb) {  
        console.log(req.file);
        console.log(" file : ",file);

            cb(null, `./server/app/v1/utils/images`)
    },

    filename: async function (req, file, cb) {
    console.log(" is ");
      const extension = path.extname(file.originalname);
    //   const fileName= req.file.filename
    //   const baseFileName=path.parse(fileName).name;

    //   console.log("from file nname",fileName);
    console.log(req);
    
      cb(null, file.originalname)
    }
    
  
    }
  ) 
  
  const   upload = multer({ storage: storage,

    fileFilter:async  function (req, file, callback) {
      var ext = path.extname(file.originalname);
      if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
          return callback(new Error('Only images are allowed'))
      }
      callback(null, true)
  },
 
   })  
module.exports=upload


 