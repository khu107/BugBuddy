import express from "express";
import morgan from "morgan";
import router from "./router";

// kirish

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// 2 - SESSIONS

// 3 - VIEWS

// 4 - ROUTERS

app.use("/", router); // SPA: REACT
export default app;
