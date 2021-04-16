import express from "express";

import { router } from "./api";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


app.listen(process.env.PORT);
