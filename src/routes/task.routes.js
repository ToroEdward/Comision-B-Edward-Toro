import { Router } from "express";
import { ctrlGetTasks, ctrlCreateTask, ctrlUpdateTask, ctrlDeleteTask } from "../controllers/task.controllers.js";

const taskRouter = Router()

taskRouter.get("/api/tasks", controlador)

taskRouter.post("/api/tasks", controlador)

taskRouter.put("/api/tasks/:id", controlador)

taskRouter.delete("/api/tasks/:id", controlador)

export { taskRouter }