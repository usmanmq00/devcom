const multer = require('multer');
const path = require('path');

  console.log('helloe eo');

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('hello i am this:: ');
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    console.log('hello i am in ');
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
})

const upload = multer({
  storage: Storage,
})

module.exports = upload;

