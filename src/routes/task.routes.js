import { Router } from "express";

const taskRouter = Router()

taskRouter.get("/api/tasks", controlador)

taskRouter.post("/api/tasks", controlador)

taskRouter.put("/api/tasks/:id", controlador)

taskRouter.delete("/api/tasks/:id", controlador)

export { taskRouter }