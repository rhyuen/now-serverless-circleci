import { NowRequest, NowResponse } from "@now/node";

export default (req: NowRequest, res: NowResponse) => {
    res.status(200).json({
        message: "hi, human."
    })
}