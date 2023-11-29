import multer from 'multer';
import path from 'path';

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const storage = multer.diskStorage({
    destination: './public/file',
    filename: (req, file, cb) => {
        cb(null, makeid(12) +
            path.extname(file.originalname))
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 10000000 // 10 MB
    }
})

export default upload;