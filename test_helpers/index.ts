const ip = require("ip");

exports.getRootPath = () => {
    const serverIp = ip.address();
    console.log(serverIp);
    return process.env.NODE_ENV === "ci" ?
        `http://${serverIp}:9911` :
        "http://127.0.0.1:9911";
}