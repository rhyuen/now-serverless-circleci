import { NowRequest, NowResponse } from "@now/node";
import { address } from "ip";

export default (req: NowRequest, res: NowResponse) => {
    console.log(`FROM NOTFOUND APP CODE: ${address()}`);
    res.status(200).json({
        message: "not found, brah."
    })
}