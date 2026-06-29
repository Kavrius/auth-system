import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
    res.send("API is running")
});

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`)
});