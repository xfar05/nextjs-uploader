import upload from '../../utils/upload';

export const config = {
  api: {
    bodyParser: false, 
  },
};

export default async function handler(req, res) {
    upload.array('files', 10)(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const result = []
    req.files.forEach(v => {
        result.push({
            originalname: v.originalname,
            filename: v.filename,
            encoding: v.encoding,
            mimetype: v.mimetype,
            size: v.size,
            url: "https://" + req.headers.host + "/file/" + v.filename
        })
    });
    res.status(200).json({
        status: 200,
        result: result
    })
  });
}