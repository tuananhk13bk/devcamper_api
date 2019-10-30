import dotenv from "dotenv";
import logger from "./logger";

logger.debug("Using .env file to supply config environment variables");
dotenv.config({ path: ".env" });
