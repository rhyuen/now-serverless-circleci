const axios = require("axios");
const { getRootPath } = require("../test_helpers/index");

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