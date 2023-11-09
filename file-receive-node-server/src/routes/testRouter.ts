import express, {Request, Response} from 'express'

const router = express.Router()

router.post('/', (req: Request, res: Response) => {
  console.log('---test-->', req.body)
  res.status(200).json({res: 'test-->',...req.body})

})

export default router