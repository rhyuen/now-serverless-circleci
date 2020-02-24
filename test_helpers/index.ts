const ip = require("ip");

exports.getRootPath = () => {
    const serverIp = ip.address();
    console.log(serverIp);
    return process.env.NODE_ENV === "ci" ?
        serverIp :
        "http://127.0.0.1:9911";
}