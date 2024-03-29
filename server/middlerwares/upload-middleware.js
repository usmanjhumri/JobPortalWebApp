import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `../client/src/assets/${file.fieldname}`);
  },
  filename: (req, file, cb) => {
    const uniqueSufix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSufix);
  },
});

const upload = multer({ storage: storage });

export default upload;
