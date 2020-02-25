const axios = require("axios");
const fetch = require("node-fetch");
const { getRootPath } = require("../test_helpers/index");

beforeEach(async () => {
    jest.setTimeout(30000);
})

describe("axios 404", () => {
    it("should respond with 'not found'.", async (done) => {
        try {
            const rootPath = getRootPath();
            console.log(`notfound ip addr: ${rootPath}`);
            const response = await axios.get(`${rootPath}/notfound`);
            expect(response.data).toHaveProperty("message");
            expect(response.data.message).toBe("not found, brah.");
            done();
        } catch (e) {
            console.error(e);
            done(e);
        }
    });
});

describe("fetch 404", () => {
    it("should respond with 'not found'.", async (done) => {
        try {
            const rootPath = getRootPath();
            console.log(`notfound ip addr: ${rootPath}`);
            const response = await fetch(`${rootPath}/notfound`).then(res => res.json());
            expect(response).toHaveProperty("message");
            expect(response.message).toBe("not found, brah.");
            done();
        } catch (e) {
            console.error(e);
            done(e);
        }
    });
});