const axios = require("axios");

describe("404", () => {
    it("should respond with 'not found'.", async (done) => {
        const rootPath = getRootPath();
        const response = await axios.get(`${rootPath}/notfound`);
        expect(response.data).toHaveProperty("message");
        expect(response.data.message).toBe("not found, brah.");
        done();
    });
});

function getRootPath() {
    return process.env.NODE_ENV === "test" ?
        "http://localhost:9911" :
        "";
}