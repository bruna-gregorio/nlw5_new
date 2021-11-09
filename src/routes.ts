import { Router } from "express";

import { CreateSettingsController } from "./controllers/CreateSettingsController";
import { FindUserSettingsController } from "./controllers/FindUserSettingsController";
import { UpdateSettingsController } from "./controllers/UpdateSettingsController";

import { CreateUsersController } from "./controllers/CreateUsersController";
import { CreateMessagesController } from "./controllers/CreateMessagesController";
import { ListMessagesByUserController } from "./controllers/ListMessagesByUserController";

const routes = Router()

const createSettingsController = new CreateSettingsController()
const findUsersettingsController = new FindUserSettingsController()
const updateSettingsController = new UpdateSettingsController()

const createUsersController = new CreateUsersController()

const createMessagesController = new CreateMessagesController()
const listMessagesByUserController = new ListMessagesByUserController()

routes.post("/settings", createSettingsController.create)
routes.get("/settings/:username", findUsersettingsController.findByUsername)
routes.put("/settings/:username", updateSettingsController.update)

routes.post("/users", createUsersController.create)

routes.post("/messages", createMessagesController.create)
routes.get("/messages/:id", listMessagesByUserController.showByUser)

export { routes }