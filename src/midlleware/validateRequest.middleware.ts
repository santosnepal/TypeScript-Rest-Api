import { AnySchema } from "yup";
import { Request,Response,NextFunction, query } from "express";
import log from "../logger";
const validate = (schema:AnySchema) => async (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    try {
        await schema.validate(
            {body:req.body,
            query:req.query,
            params:req.params
        });
        return next();
    } catch (error:any) {
        // log.error(error);
        res.status(422).send(error.errors)
    }
};
export default validate;
