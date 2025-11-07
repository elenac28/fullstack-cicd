import request from "supertest";
import app from "../src/server.js";

test("GET /api/hello returns message", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/Hello/);
});
