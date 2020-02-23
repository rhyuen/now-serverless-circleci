const axios = require("axios");
const waitOn = require("wait-on");

beforeAll(async () => {
    setTimeout(() => {
        console.log("beginning now.");
    }, 1500);
    const options = {
        resources: ["http://127.0.0.1:9911/notfound"]
    };
    await waitOn(options)
})

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