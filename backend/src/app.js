import express from 'express';
import cors from 'cors';
import mainRoute from './routes/main.route.js';
import 'dotenv/config'

const app = express();

app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }))

app.use('/api', mainRoute)

export default app;