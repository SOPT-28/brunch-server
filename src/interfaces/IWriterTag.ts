import mongoose from "mongoose";
import { IWriterInfo } from "./IWriterInfo";

export interface IWriterTag {
    pet: [IWriterInfo];
    create: [IWriterInfo];
    journey: [IWriterInfo];
};