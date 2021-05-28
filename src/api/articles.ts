import express, { Request, Response } from "express";
import { Mongoose } from "mongoose";
const returnCode = require('../library/returnCode');
const router = express.Router();

import Article from "../models/Article";

/**
 *  @route Post api/articles
 *  @desc Register articles
 *  @access Public
 *  @articles_정보조회
 */


 router.get("/", async (req: Request, res: Response) => {
    try {
        const articles = await Article.find();

        if (!articles) {
            res.status(400).json({
                status: returnCode.BAD_REQUEST,
                errors: [{ msg: "값을 불러오지 못했습니다." }],
            });
        }

        res.status(200).json({
            status: returnCode.OK,
            msg: "Article 정보 조회에 성공했습니다.",
            data: {
                articles,
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
