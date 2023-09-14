import { body } from "express-validator";
import isURL from "validator/lib/isURL";

export const createTaskSchema = [
    body("title")
        .isString().withMessage("Debe ser un string")
        .notEmpty().withMessage("No debe estr vacio"),
    body("description")
        .isString().withMessage("Debe ser un string")
        .notEmpty().withMessage("No debe estar vacio"),
    body("poster")
        .isURL().withMessage("Debe ser un enlace")
        .notEmpty().withMessage("No debe estar vacio"),   
]

export const editTaskSchema = [
    body("title")
        .isString().withMessage("Debe ser un string")
        .notEmpty().withMessage("No debe estr vacio"),
    body("description")
        .isString().withMessage("Debe ser un string")
        .notEmpty().withMessage("No debe estar vacio"),
    body("poster")
        .isURL().withMessage("Debe ser un enlace")
        .notEmpty().withMessage("No debe estar vacio"),
]