import upload from '../../utils/upload';

export const config = {
  api: {
    bodyParser: false, 
  },
};

export default async function handler(req, res) {
  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
  res.status(200).json({
      status: 200,
      result: {
          originalname: req.file.originalname,
          filename: req.file.filename,
          encoding: req.file.encoding,
          mimetype: req.file.mimetype,
          size: req.file.size,
          url: "https://" + req.headers.host + "/file/" + req.file.filename
      }
  })
  });
}