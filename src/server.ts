require('module-alias/register')
import * as dotenv from 'dotenv'
import app from '@/router'
import runMongo from '@/helpers/mongo'

dotenv.config()
const port = process.env.PORT

void (async () => {
  console.log('Starting mongo')
  await runMongo()
  console.log('Mongo connected')
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
  })
})()
