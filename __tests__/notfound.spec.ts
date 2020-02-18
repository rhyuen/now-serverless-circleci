const axios = require("axios");

describe("404", () => {
    it("should respond with 'not found'.", async (done) => {
        const response = await axios.get("http://localhost:9911/notfound");
        expect(response.data).toHaveProperty("message");
        expect(response.data.message).toBe("not found, brah.");
        done();
    });
});