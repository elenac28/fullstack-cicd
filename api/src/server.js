import express from "express";
import cors from "cors";

const app = express();

// Allow requests from your frontend port
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.get("/api/hello", (_req, res) => {
    res.json({ message: "Hello from API", version: "1.0.0" });
});

const port = process.env.PORT || 8080;
if (process.env.NODE_ENV !== "test") {
    app.listen(port, () =>
        console.log(`API running on http://localhost:${port}`)
    );
}

export default app;

