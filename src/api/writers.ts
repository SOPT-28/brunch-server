import express, { Request, Response } from "express";
const returnCode = require('../library/returnCode');
const router = express.Router();
import Writer from "../models/Writer";

/**  작가 정보 조회 기능
 * @route get /writers
 * @desc load writer's information
 * @access Public
 */

router.get(
    "/",
    async (req: Request, res: Response) => {
        
        try {
            const writer = await Writer.find() //find => 전체 정보, findOne => 전체 중 특정 값 조회

            if (!writer) {
                res.status(400).json({
                    status: returnCode.BAD_REQUEST,
                    msg: "값을 불러오지 못했습니다.",
                });
            }
            res.status(200).json({
                status: returnCode.OK,
                msg: "작가 정보 조회에 성공했습니다.",
                data: {
                    writer,
                  }
              });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({
                status: returnCode.INTERNAL_SERVER_ERROR,
                msg: "서버오류",
             });
        }
    }
);
module.exports = router;

