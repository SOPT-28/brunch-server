import express, { Request, Response } from "express";
const returnCode = require('../library/returnCode');
const router = express.Router();
import Article from "../models/Article";

/**  검색어 요청 받아서 응답하는 기능
 * @route post /api/search
 * @desc post searchWord
 * @access Public
 */

router.post(
    "/",
    async (req: Request, res: Response) => {

        const { searchWord } = req.body; //바디 값

        try {
            const searchArticle = await Article.findOne({writtenBy: searchWord}); 
        
            if (!searchArticle) {
                res.status(400).json({
                    status: returnCode.BAD_REQUEST,
                    msg: "검색에 실패했습니다.",
                });
            }
            res.status(200).json({
                status: returnCode.OK,
                msg: "검색에 성공했습니다.",
                data: {
                    searchArticle,
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

