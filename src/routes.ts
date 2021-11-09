import { Router } from "express";

import { CreateSettingsController } from "./controllers/CreateSettingsController";
import { FindUserSettingsController } from "./controllers/FindUserSettingsController";
import { UpdateSettingsController } from "./controllers/UpdateSettingsController";

import { CreateUsersController } from "./controllers/CreateUsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router()

const createSettingsController = new CreateSettingsController()
const findUsersettingsController = new FindUserSettingsController()
const updateSettingsController = new UpdateSettingsController()

const createUsersController = new CreateUsersController()
const messagesController = new MessagesController()

routes.post("/settings", createSettingsController.create)
routes.get("/settings/:username", findUsersettingsController.findByUsername)
routes.put("/settings/:username", updateSettingsController.update)

routes.post("/users", createUsersController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export { routes }