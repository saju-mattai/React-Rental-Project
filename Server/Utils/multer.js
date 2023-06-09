const multer = require('multer');
const path = require('path')
// let 
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './pari/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + '-' + file.originalname)
//     }
// })
const storage = multer.diskStorage({
  destination : path.join(__dirname , '../uploads'),
  filename : function (req , file , cb) {
    cb(null , file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        //reject file
        cb({message: 'Unsupported file format'}, false)
    }
}

const upload = multer({
    storage: storage,
    // limits: { fileSize: 1024 * 1024 },
    // fileFilter: fileFilter
})

module.exports = upload;