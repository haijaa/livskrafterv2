import cors from "cors";
import * as dotenv from "dotenv";
import { Client } from "pg";
import express, { Request, Response } from "express";

dotenv.config()

const port = process.env.PORT || 3001;

const client = new Client({
    connectionString: process.env.PGURI
})
console.log('Connection', process.env.PGURI)
client.connect()

const app = express()

app.use(cors(), express.json())

app.listen(port, () => {
    console.log(`Backend kör på ${port}`)
})