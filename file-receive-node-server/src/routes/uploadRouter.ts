import {Request, Response, Router} from 'express'
import multer from'multer'
const router = Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'e://')
    // cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // cb(null, file.fieldname + '-' + uniqueSuffix )
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage
})
// POST /upload
router.post('/', upload.array('files'),( req: Request, res: Response, next)=> {
  // next()
  if(!req.files || !req.files.length) return res.status(400).send({res: null, ...req.body, err: "fiald to upload file"})
  console.log('---files-->', req.files)
  console.log('body-->', req.body)
  res.status(200).json({res: 'File Uploaded', ...req.body})
})

export default router