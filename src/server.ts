// import { app } from './app';
import express from "express";

const app = express();
import routes from "./routes/user";

const port = 3002;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
