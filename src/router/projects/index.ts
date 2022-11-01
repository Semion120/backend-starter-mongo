import express = require('express')
import { Request, Response } from 'express'

const projectsRouter = express.Router()

projectsRouter.get('/', (req: Request, res: Response) => {
  res.send('Hi projects')
})

export default projectsRouter
