import { Router } from "express";
import * as bootcampController from "components/bootcamp/controllers/index";
import bootcampValidationSchema from "components/bootcamp/validation";
import validationMiddlewareFactory from "middleware/validation";

const bootcampRoutes = Router();

bootcampRoutes
  .route("/")
  .get(bootcampController.getAllBootcamps)
  .post(
    validationMiddlewareFactory(bootcampValidationSchema),
    bootcampController.createBootcamp
  );

bootcampRoutes
  .route("/:id")
  .get(bootcampController.getBootcampById)
  .put(bootcampController.updateBootcamp)
  .delete(bootcampController.deleteBootcamp);

export default bootcampRoutes;
