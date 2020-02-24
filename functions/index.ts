import { NowRequest, NowResponse } from "@now/node";
import { address } from "ip";

export default (req: NowRequest, res: NowResponse) => {
    console.log(address);
    res.status(200).json({
        message: "hi, human."
    })
}