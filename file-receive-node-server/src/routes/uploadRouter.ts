import { Request, Response, Router } from 'express'
import { PythonShell } from 'python-shell'
import { upload } from '@/midlewares';

const options = {
  scriptPath: 'E:\\image_preprocessing',
  args: ['e:/Images/'],
};

const router = Router()

// POST /upload
router.post('/', upload.array('files'), (req: Request, res: Response) => {

  if (!req.files || !req.files.length) return res.status(400).send({ res: null, ...req.body, err: "fiald to upload file" })

  PythonShell.run('main.py', options)
    .then(message => {
      console.log('Python script executed successfully!  ', message, '--------------------');
    })
    .catch(err => console.log('error-->', err))

  res.status(200).json({ res: 'File Uploaded', ...req.body })
})

export default router