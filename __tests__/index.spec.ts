const axios = require("axios");
const fetch = require("node-fetch");
const { getRootPath } = require("../test_helpers/index.ts");


describe("test index", () => {
    test("it should return 200", (done) => {
        expect(true).toBe(true)
        done();
    });
});

describe("end point", () => {
    it("should respond with text", async (done) => {
        try {
            console.log(process.env.NODE_ENV);
            const rootPath = getRootPath();
            console.log(`index ip addres: ${rootPath}`);
            const response = await axios.get(`${rootPath}/index`);
            expect(response.data).toHaveProperty("message");
            expect(response.data.message).toBe("hi, human.");
            done();
        } catch (e) {
            console.error(e);
        }
    });
});

describe("end point", () => {
    it("should respond with text", async (done) => {
        try {
            console.log(process.env.NODE_ENV);
            const rootPath = getRootPath();
            console.log(`index ip addres: ${rootPath}`);
            const response = await fetch(`${rootPath}/index`).then(res => res.json());
            expect(response).toHaveProperty("message");
            expect(response.message).toBe("hi, human.");
            done();
        } catch (e) {
            console.error(e);
        }
    });
});
