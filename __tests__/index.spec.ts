const axios = require("axios");
const { getRootPath } = require("../test_helpers/index.ts");


describe("test index", () => {
    test("it should return 200", (done) => {
        expect(true).toBe(true)
        done();
    });
});

describe("end point", () => {
    it("should respond with text", async (done) => {
        const rootPath = getRootPath();
        const response = await axios.get(`${rootPath}/index`);
        expect(response.data).toHaveProperty("message");
        expect(response.data.message).toBe("hi, human.");
        done();
    });
});
