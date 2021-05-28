import express, { Request, Response } from "express";
import { Mongoose } from "mongoose";
const returnCode = require('../library/returnCode');
const router = express.Router();

import Keyword from "../models/Keyword";

/**
 *  @route Post api/articles
 *  @desc Register articles
 *  @access Public
 *  @keywords_키워드 조회
 */


 router.get("/", async (req: Request, res: Response) => {
    try {
        const keywords = await Keyword.find();

        if (!keywords) {
            res.status(400).json({
                status: returnCode.BAD_REQUEST,
                errors: [{ msg: "값을 불러오지 못했습니다." }],
            });
        }

        res.status(200).json({
            status: returnCode.OK,
            msg: "Keyword 정보 조회에 성공했습니다.",
            data: {
                keywords,
              }
          });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            status: returnCode.INTERNAL_SERVER_ERROR,
            errors: [{ msg: "server error" }],
         });
    }
  });
module.exports = router;
