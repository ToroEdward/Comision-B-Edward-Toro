import { Router } from "express";
import { ctrlGetTasks, ctrlCreateTask, ctrlUpdateTask, ctrlDeleteTask } from "../controllers/task.controllers.js";
import { validator } from "../middlewares/validator.js";
import { createTaskSchema, editTaskSchema } from "../models/schemas/task.schema.js";

const taskRouter = Router()

taskRouter.get("/api/tasks", ctrlGetTasks)

taskRouter.post("/api/tasks", createTaskSchema, validator, ctrlCreateTask)

taskRouter.put("/api/tasks/:id", editTaskSchema, validator, ctrlUpdateTask)

taskRouter.delete("/api/tasks/:id", ctrlDeleteTask)

export { taskRouter }