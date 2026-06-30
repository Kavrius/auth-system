import express from "express";
import "dotenv/config"
// import { sequelize } from "./database/db";
import userRoutes from "./router/user.routes"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", message: "API is running" })
});

app.use(userRoutes);


app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`)
});

/*
sequelize.sync({ alter: true }).then(() => {
        console.log("DB connected and synchronized");
        app.listen(PORT, () => {
            console.log(`running on http://localhost:${PORT}`)
        });
    }).catch((error) => {
        console.log("Erro ao conectar ao banco de dados", error)
    });
*/