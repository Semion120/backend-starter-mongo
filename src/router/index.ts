import { Request, Response } from 'express'
import app from '@/helpers/startServer'

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World')
})

import projectsRouter from '@/router/projects'
app.use('/projects', projectsRouter)

export default app
