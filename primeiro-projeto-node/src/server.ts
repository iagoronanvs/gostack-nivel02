import express, { response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello GoStack!" });
});

app.listen(3335, () => {
  console.log("Server started on port 3335.");
});
