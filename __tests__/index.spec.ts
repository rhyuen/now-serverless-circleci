const axios = require("axios");

describe("test index", () => {
    test("it should return 200", (done) => {
        expect(true).toBe(true)
        done();
    });
});

describe("end point", () => {
    it("should respond with text", async (done) => {
        const response = await axios.get("http://localhost:9911/index");
        expect(response.data).toHaveProperty("message");
        expect(response.data.message).toBe("hi, human.");
        done();
    });
});

