import express from "express";
import mongoose from "mongoose";
// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://Joey:nZr6Ef0sJZKEdMRi@cluster0.c6o2f.mongodb.net/tinderdb?retryWrites=true&w=majority`;
// Middlewares
// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// Api endpoints
app.get("/", (req, res) => res.status(200).send("HELLO WORLD!"));
// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
