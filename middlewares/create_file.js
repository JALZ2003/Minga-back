import multer from "multer";

export default (req, res, next) => {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, '../storage/chapters'); // Carpeta donde se guardarán los archivos
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname)); // Renombrar el archivo
        }
    });

    const upload = multer({ storage });

    upload.single(req.body.pages[0]);
}