import "dotenv/config.js";
import "../config/database.js";
import express from "express";
import cors from "cors";
import morgan from "morgan"
import indexRouter from "../router/index.js";
import not_found_handler from "../middlewares/not_found_handler.js";
import error_handler from "../middlewares/error_handler.js";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

app.use('/api', indexRouter)
app.use(not_found_handler)
app.use(error_handler)

app.listen(process.env.PORT, () => console.log("Server Ready..."));

export default app;