import { Router } from "express";
import bootcampRoutes from "components/bootcamp/routes";

const rootRoute = Router();

rootRoute.use("/bootcamp", bootcampRoutes);

export default rootRoute;
