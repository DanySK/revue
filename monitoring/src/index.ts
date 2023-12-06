import type { Express, NextFunction, Request, Response } from "express";
import express from 'express'

import { config } from 'dotenv'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import { indexRouter } from './routes'
import { deviceRouter } from './routes/device.js'
import { jwtManager } from './utils/JWTManager.js'

config()

export const __dirname: string = dirname(fileURLToPath(import.meta.url)) + '/../../'
const app: Express = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'client')))

const PORT: number = Number(process.env.PORT) || 443

app.use((req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (token !== process.env.DEV_API_KEY) {
    jwtManager.authenticate(req, res, next)
  } else {
    return next()
  }
  res.send('No token provided')
})

app.use(indexRouter)
app.use('/device', deviceRouter)

const mongoConnect = async () => {
  const connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`
  await mongoose
    .connect(connectionString)
    .then(async () => {
      console.log(`Authentication server listening on http://${process.env.DB_HOST}:${PORT}`)
    })
    .catch((e) => console.log(e))
}

app.listen(PORT, () => {
  mongoConnect()
})
